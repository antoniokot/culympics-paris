package main

import (
	"context"

	"github.com/antoniokot/culympics-paris/culympics-paris-api/culympics-paris-api/internal/config"
	"github.com/antoniokot/culympics-paris/culympics-paris-api/culympics-paris-api/internal/pkg"
)

func main() {
	ctx := context.Background()
	config.Init()

	pool, err := pkg.CreatePool(ctx, config.GetDatabaseConfig())
	if err != nil {
		panic(err)
	}
	defer pool.Close()

	err = pool.Ping(ctx)
	if err != nil {
		panic(err)
	}
}
