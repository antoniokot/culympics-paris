package service

import (
	"context"

	"github.com/antoniokot/culympics-paris/culympics-paris-api/internal/model"
)

type RestaurantDao interface {
	List(context.Context, model.RestaurantListingFilters) ([]model.Restaurant, model.Paging, error)
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
