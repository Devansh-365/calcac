package models

import "gorm.io/gorm"

type Entry struct {
	gorm.Model
	Dish        string            `json:"dish"`
	Fat         float64           `json:"fat"`
	Ingredients string            `json:"ingredients"`
	Calories    string            `json:"calories"`
}
