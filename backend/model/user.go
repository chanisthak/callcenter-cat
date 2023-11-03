package model

import "time"

type User struct {
	ID          int64     `gorm:"PRIMARY_KEY; AUTO_INCREMENT; NOT NULL;" json:"id" AUTO_INCREMENT;`
	FirstName   string    `json:"firstName" binding:"required"`
	LastName    string    `json:"lastName" binding:"required"`
	Email       string    `json:"email" binding:"required"`
	Job         string    `json:"job" binding:"required"`
	DateOfBirth time.Time `json:"dob" binding:"required"`
}
