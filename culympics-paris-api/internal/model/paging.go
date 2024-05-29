package model

type Paging struct {
	Page  int `json:"page"`
	Size  int `json:"size"`
	Total int `json:"total"`
}

type PagedResults struct {
	Data   interface{} `json:"data"`
	Paging Paging      `json:"paging"`
}
