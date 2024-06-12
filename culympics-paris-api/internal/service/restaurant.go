package service

import (
	"context"

	"github.com/antoniokot/culympics-paris/culympics-paris-api/internal/model"
	"github.com/google/uuid"
)

type RestaurantDao interface {
	List(context.Context, model.RestaurantListingFilters) ([]model.Restaurant, model.Paging, error)
	Fetch(context.Context, uuid.UUID) (model.Restaurant, error)
}

type Restaurant struct {
	dao RestaurantDao
}

func NewRestaurant(dao RestaurantDao) *Restaurant {
	return &Restaurant{dao: dao}
}

func (r Restaurant) List(ctx context.Context, filters model.RestaurantListingFilters) ([]model.Restaurant, model.Paging, error) {
	return r.dao.List(ctx, filters)
}

func (r Restaurant) Fetch(ctx context.Context, id uuid.UUID) (model.Restaurant, error) {
	return r.dao.Fetch(ctx, id)
}
