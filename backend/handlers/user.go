package handlers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUserById(c *gin.Context) {
	id := c.Param("id")
	c.JSON(http.StatusOK, "User Id: "+id)
}
