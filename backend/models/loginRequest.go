package models

// LoginRequest represents a login request
type LoginRequest struct {
	UserName   string `json:"userName" form:"userName" binding:"required"`
	Password   string `json:"password" form:"password" binding:"required"`
	RememberMe bool   `json:"rememberMe" form:"rememberMe"`
}
