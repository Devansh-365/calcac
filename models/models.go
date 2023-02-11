package models

import "gorm.io/gorm"

type Entry struct {
	gorm.Model
	ID       	uint              `json:"id" gorm:"primaryKey:autoIncrement;"`
	Dish        string            `json:"dish"`
	Fat         float64           `json:"fat"`
	Ingredients string            `json:"ingredients"`
	Calories    string            `json:"calories"`
}
