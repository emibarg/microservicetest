package services

import (
	"net/http"

	"backend/authentication/oauth"
)

type AuthService struct{}

func (s *AuthService) Login(w http.ResponseWriter, r *http.Request) {
	oauth.OAuthLoginHandler(w, r)
}

func (s *AuthService) Callback(w http.ResponseWriter, r *http.Request) {
	oauth.OAuthCallbackHandler(w, r)
}
