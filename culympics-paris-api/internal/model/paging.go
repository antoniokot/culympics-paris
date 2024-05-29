package model

type Paging struct {
	Page int64 `json:"page"`
	Size int64 `json:"size"`
}

type PagedResults struct {
	Data   interface{} `json:"data"`
	Paging Paging      `json:"paging"`
}
