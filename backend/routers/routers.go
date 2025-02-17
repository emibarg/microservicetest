package router

import (
	"backend/handlers"
	"backend/services"

	"github.com/gin-gonic/gin"
)

func NewRouter() *gin.Engine {
	authService := &services.AuthService{}
	authHandler := &handlers.AuthHandler{AuthService: authService}

	router := gin.Default()
	router.GET("/login", func(c *gin.Context) {
		authHandler.Login(c.Writer, c.Request)
	})
	router.GET("/auth/callback", func(c *gin.Context) {
		authHandler.Callback(c.Writer, c.Request)
	})

	return router
}
