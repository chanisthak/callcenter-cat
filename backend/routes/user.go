package routes

import (
	"catcallcenter/go-rest-api/handlers"

	"github.com/gin-gonic/gin"
)

func SetUpUserRoute(g *gin.Engine) {
	apiRoute := g.Group("/api")
	{
		apiRoute.POST("/register")
		apiRoute.POST("/login")
	}

	userRoute := apiRoute.Group("/users")
	{
		userRoute.GET("/:id", handlers.GetUserById)
		userRoute.PUT("/:id")
	}
}
