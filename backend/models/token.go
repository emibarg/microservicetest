package models

import (
	"gorm.io/gorm"
)

type Token struct {
	gorm.Model
	AccessToken  string `json:"access_token"`
	TokenType    string `json:"token_type"`
	RefreshToken string `json:"refresh_token"`
	Expiry       int64  `json:"expiry"`
}
