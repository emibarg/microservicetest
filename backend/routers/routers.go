package routers

import (
	"backend/authentication/token"
	"backend/handler"
	"backend/models"
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Login struct {
	logger       *log.Logger
	loginHandler *handler.Login
	flags        *models.Flags
}

func NewRoute(l *log.Logger, f *models.Flags) *Login {
	loginHandler := handler.NewLogin(l, f)
	token.Init()

	return &Login{
		logger:       l,
		loginHandler: loginHandler,
		flags:        f,
	}
}

func (r *Login) RegisterRoutes() *gin.Engine {
	ginEngine := gin.Default()

	// Add CORS middleware
	ginEngine.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Allow your frontend origin
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Register routes
	ginEngine.POST("/login", r.loginHandler.Login)
	ginEngine.POST("/verifyToken", r.loginHandler.VerifyToken)

	return ginEngine
}
