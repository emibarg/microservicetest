package token

import (
	"fmt"
	"time"

	"backend/models"

	"github.com/dgrijalva/jwt-go"
)

func Init() *models.ErrorDetail {
	flags, err := models.GetFlags()
	if err != nil {
		return err
	}

	_, _ = flags.GetApplicationUrl()
	return nil
}

const (
	jwtPrivateToken = "SuperMegaSecretToken"
)

func GenerateToken(claims *models.JwtClaims, expirationTime time.Time) (string, *models.ErrorDetail) {
	claims.ExpiresAt = expirationTime.Unix()
	claims.IssuedAt = time.Now().UTC().Unix()

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenString, err := token.SignedString([]byte(jwtPrivateToken))
	if err != nil {
		return "", &models.ErrorDetail{
			ErrorType:    models.ErrorTypeError,
			ErrorMessage: err.Error(),
		}
	}
	return tokenString, nil
}

func VerifyToken(tokenString, origin string) (bool, *models.JwtClaims) {
	claims := &models.JwtClaims{}
	token, _ := getTokenFromString(tokenString, claims)
	if token.Valid {
		if claims.VerifyAudience(origin) {
			return true, claims
		}
	}
	return false, nil
}

func GetClaims(tokenString string) models.JwtClaims {
	claims := &models.JwtClaims{}
	_, err := getTokenFromString(tokenString, claims)
	if err != nil {
		return models.JwtClaims{} // Return an empty struct or handle the error
	}
	return *claims
}

func getTokenFromString(tokenString string, claims *models.JwtClaims) (*jwt.Token, error) {
	return jwt.ParseWithClaims(tokenString, claims, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return []byte(jwtPrivateToken), nil
	})
}
