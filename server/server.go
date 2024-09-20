package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// GET route for root URL
	router.GET("/", get_root)

	// Start the HTTP server on port 8080
	router.Run("localhost:8080")
}

func get_root(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "HTTP is Online!",
	})
}
