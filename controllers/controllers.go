package controllers

import (
	"github.com/Devansh-365/calcac.git/database"
	"github.com/Devansh-365/calcac.git/models"
	"github.com/gofiber/fiber/v2"
)

func Home(c *fiber.Ctx) error {
	entries := []models.Entry{}
	database.DB.Db.Find(&entries)

	return c.Status(200).JSON(entries)
}

func CreateEntry(c *fiber.Ctx) error {
	entry := new(models.Entry)
	if err := c.BodyParser(entry); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": err.Error(),
		})
	}

	database.DB.Db.Create(&entry)

	return c.Status(200).JSON(entry)
}
