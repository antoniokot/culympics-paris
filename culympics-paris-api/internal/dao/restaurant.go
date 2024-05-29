package dao

import (
	"context"
	"fmt"
	"math"

	"github.com/antoniokot/culympics-paris/culympics-paris-api/internal/model"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/pkg/errors"
)

type Restaurant struct {
	db *pgxpool.Pool
}

func NewRestaurant(db *pgxpool.Pool) *Restaurant {
	return &Restaurant{db: db}
}

const allRestaurantFields = "id, country, name, address, image_url, description, latitude, longitude"

func (r Restaurant) List(ctx context.Context, filters model.RestaurantListingFilters) ([]model.Restaurant, model.Paging, error) {
	dataQuery := `
		SELECT ` + allRestaurantFields + ` FROM restaurants r WHERE 1=1
	`

	countQuery := `
		SELECT count(id) as "total" from restaurants r WHERE 1=1
	`

	extraParams := make([]interface{}, 0, 3)
	paramCount := 1

	if filters.Country != "" {
		dataQuery += fmt.Sprintf(" AND r.country = $%d", paramCount)
		countQuery += fmt.Sprintf(" AND r.country = $%d", paramCount)
		extraParams = append(extraParams, filters.Country)
	}

	// default limit size
	if filters.Size == 0 {
		filters.Size = math.MaxInt
	}

	// Select total count
	type counting struct {
		Total int `db:"total"`
	}
	countingResult := counting{}
	countRow := r.db.QueryRow(ctx, countQuery, extraParams...)
	err := countRow.Scan(&countingResult.Total)
	if err != nil {
		return nil, model.Paging{}, errors.Wrap(err, "Failed to get total items count for restaurants table")
	}

	// pagination params
	dataQuery = dataQuery + fmt.Sprintf(" limit $%d offset $%d", paramCount, paramCount+1)
	paramCount += 2
	extraParams = append(extraParams, filters.Size, filters.Size*filters.Page)

	result := []model.Restaurant{}
	rows, err := r.db.Query(ctx, dataQuery, extraParams...)
	if err != nil {
		return nil, model.Paging{}, errors.Wrap(err, "Failed to get restaurants")
	}
	defer rows.Close()

	for rows.Next() {
		var item model.Restaurant
		err := rows.Scan(&item.Id, &item.Country, &item.Name, &item.Address, &item.ImageURL, &item.Description, &item.Latitude, &item.Longitude)
		if err != nil {
			return nil, model.Paging{}, errors.Wrap(err, "Failed to scan restaurant")
		}
		result = append(result, item)
	}

	if err := rows.Err(); err != nil {
		return nil, model.Paging{}, errors.Wrap(err, "Failed to iterate over restaurants")
	}

	return result, model.Paging{
		Page:  filters.Page,
		Size:  filters.Size,
		Total: countingResult.Total,
	}, nil
}
