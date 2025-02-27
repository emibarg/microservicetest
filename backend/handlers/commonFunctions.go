package handlers

import (
	"backend/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ok(context *gin.Context, status int, message string, data interface{}) {
	context.AbortWithStatusJSON(status, models.Response{
		Data:    data,
		Status:  status,
		Message: message,
	})
}

func badRequest(context *gin.Context, status int, message string, errors []models.ErrorDetail) {
	context.AbortWithStatusJSON(status, models.Response{
		Error:   errors,
		Status:  status,
		Message: message,
	})
}

func returnUnauthorized(context *gin.Context) {
	context.AbortWithStatusJSON(http.StatusUnauthorized, models.Response{
		Error: []models.ErrorDetail{
			{
				ErrorType:    models.ErrorTypeUnauthorized,
				ErrorMessage: "Unauthorized",
			},
		},
		Status:  http.StatusUnauthorized,
		Message: "Unauthorized",
	})
}
