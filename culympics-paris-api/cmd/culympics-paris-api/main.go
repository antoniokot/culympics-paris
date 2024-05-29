package main

import (
	"context"
	"github.com/antoniokot/culympics-paris/culympics-paris-api/culympics-paris-api/internal/api"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/labstack/gommon/log"
	"os"
	"os/signal"
	"syscall"

	"github.com/antoniokot/culympics-paris/culympics-paris-api/culympics-paris-api/internal/config"
	"github.com/antoniokot/culympics-paris/culympics-paris-api/culympics-paris-api/internal/pkg"
)

func main() {
	ctx := context.Background()
	rawConfig := config.Init()

	pool, err := pkg.CreatePool(ctx, config.GetDatabaseConfig())
	if err != nil {
		panic(err)
	}
	defer pool.Close()

	err = pool.Ping(ctx)
	if err != nil {
		panic(err)
	}

	// server
	server := echo.New()
	server.HideBanner = true
	server.HidePort = true
	server.Use(middleware.Gzip())
	server.Pre(middleware.RemoveTrailingSlash())

	api.Health{}.Register(server)

	// start HTTP server
	go func() {
		log.Infof("Starting http server at " + rawConfig.GetString("app.host"))
		err := server.Start(rawConfig.GetString("app.host"))
		log.Fatal(err.Error(), "failed to start server")
	}()

	// listen for system signals to gracefully stop the application
	signalChannel := make(chan os.Signal, 2)
	signal.Notify(signalChannel, os.Interrupt, syscall.SIGTERM)
	switch <-signalChannel {
	case os.Interrupt:
		log.Info("Received SIGINT, stopping...")
	case syscall.SIGTERM:
		log.Info("Received SIGTERM, stopping...")
	}
}
