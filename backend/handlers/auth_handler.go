package handlers

import (
	"net/http"

	"backend/services"
)

type AuthHandler struct {
	AuthService *services.AuthService
}

func (h *AuthHandler) Login(w http.ResponseWriter, r *http.Request) {
	h.AuthService.Login(w, r)
}

func (h *AuthHandler) Callback(w http.ResponseWriter, r *http.Request) {
	h.AuthService.Callback(w, r)
}
