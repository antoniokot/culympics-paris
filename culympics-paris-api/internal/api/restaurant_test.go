package api

import (
	"errors"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/antoniokot/culympics-paris/culympics-paris-api/internal/api/mocks"
	"github.com/antoniokot/culympics-paris/culympics-paris-api/internal/model"
	"github.com/google/uuid"
	"github.com/labstack/echo/v4"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

func TestFetch(t *testing.T) {
	t.Run("should return 400 Bad Request when input uuid is invalid", func(t *testing.T) {
		id := "invalid-uuid"
		api := NewRestaurant(nil)

		e := echo.New()
		req := httptest.NewRequest(echo.GET, "/v1/restaurants/"+id, nil)
		rec := httptest.NewRecorder()

		c := e.NewContext(req, rec)
		c.SetPath("/v1/restaurants/:id")
		c.SetParamNames("id")
		c.SetParamValues(id)

		assert.NoError(t, api.Fetch(c))
		assert.Equal(t, http.StatusBadRequest, rec.Code)
	})

	t.Run("should return 500 Internal Server Error when service returns error", func(t *testing.T) {
		id := uuid.NewString()
		errReturned := errors.New("foo")

		serviceMock := mocks.NewRestaurantService(t)
		serviceMock.
			EXPECT().
			Fetch(mock.Anything, mock.MatchedBy(func(in uuid.UUID) bool {
				return in.String() == id
			})).
			Return(model.Restaurant{}, errReturned)

		api := NewRestaurant(serviceMock)

		e := echo.New()
		req := httptest.NewRequest(echo.GET, "/v1/restaurants/"+id, nil)
		rec := httptest.NewRecorder()

		c := e.NewContext(req, rec)
		c.SetPath("/v1/restaurants/:id")
		c.SetParamNames("id")
		c.SetParamValues(id)

		assert.NoError(t, api.Fetch(c))
		assert.Equal(t, http.StatusInternalServerError, rec.Code)
	})

	t.Run("happy path - should return 200 OK", func(t *testing.T) {
		id := uuid.NewString()
		returnal := model.Restaurant{Id: uuid.MustParse(id)}

		serviceMock := mocks.NewRestaurantService(t)
		serviceMock.
			EXPECT().
			Fetch(mock.Anything, mock.MatchedBy(func(in uuid.UUID) bool {
				return in.String() == id
			})).
			Return(returnal, nil)

		api := NewRestaurant(serviceMock)

		e := echo.New()
		req := httptest.NewRequest(echo.GET, "/v1/restaurants/"+id, nil)
		rec := httptest.NewRecorder()

		c := e.NewContext(req, rec)
		c.SetPath("/v1/restaurants/:id")
		c.SetParamNames("id")
		c.SetParamValues(id)

		assert.NoError(t, api.Fetch(c))
		assert.Equal(t, http.StatusOK, rec.Code)
	})

}
