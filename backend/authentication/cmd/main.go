package main

import (
	"log"
	"net/http"

	"backend/authentication/oauth"
	router "backend/routers"

	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables from .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}

	// Initialize OAuth configuration
	oauth.InitOAuthConfig()

	r := router.NewRouter()
	http.ListenAndServe(":8080", r)
}
