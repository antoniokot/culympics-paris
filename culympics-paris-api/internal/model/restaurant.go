package model

import (
	"github.com/google/uuid"
)

type Restaurant struct {
	Id          uuid.UUID `json:"id"`
	Country     string    `json:"country"`
	Name        string    `json:"name"`
	Address     string    `json:"address"`
	ImageURL    string    `json:"image_url"`
	Description string    `json:"description"`
	Latitude    float64   `json:"latitude"`
	Longitude   float64   `json:"longitude"`
}

type RestaurantListingFilters struct {
	Page    int    `json:"page" query:"page"`
	Size    int    `json:"size" query:"size"`
	Country string `json:"country" query:"country"`
}
