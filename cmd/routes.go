package main

import (
	"github.com/Devansh-365/calcac.git/controllers"
	"github.com/gofiber/fiber/v2"
)

func setupRoutes(app *fiber.App) {
	app.Get("/", controllers.Home)

	app.Post("/entry", controllers.CreateEntry)
}
