package main

import (
	"catcallcenter/go-rest-api/routes"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	routes.SetUpUserRoute(r)
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello Meoww~~~",
		})
	})

	r.Run(":3000")
}
