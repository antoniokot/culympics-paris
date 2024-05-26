package api

import (
	echo "github.com/labstack/echo/v4"
	"net/http"
)

type Health struct{}

func (h Health) Register(server *echo.Echo) {
	v1 := server.Group("v1")

	v1.GET("/health", h.Health)
}

func (h Health) Health(c echo.Context) error {
	return c.JSON(http.StatusOK, "api is on!")
}