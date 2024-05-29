package api

import (
	"context"
	"net/http"

	"github.com/antoniokot/culympics-paris/culympics-paris-api/internal/model"
	echo "github.com/labstack/echo/v4"
)

type RestaurantService interface {
	List(context.Context, model.RestaurantListingFilters) ([]model.Restaurant, model.Paging, error)
}

type Restaurant struct {
	service RestaurantService
}

func NewRestaurant(RestaurantService RestaurantService) *Restaurant {
	return &Restaurant{service: RestaurantService}
}

func (r Restaurant) Register(server *echo.Echo) {
	v1 := server.Group("v1")

	v1.GET("/restaurants", r.List)
}

func (r Restaurant) List(c echo.Context) error {
	ctx := c.Request().Context()

	var filters model.RestaurantListingFilters
	if err := c.Bind(&filters); err != nil {
		return c.JSON(400, err)
	}

	restaurants, paging, err := r.service.List(ctx, filters)
	if err != nil {
		return c.JSON(500, err)
	}

	return c.JSON(http.StatusOK, model.PagedResults{Data: restaurants, Paging: paging})
}
