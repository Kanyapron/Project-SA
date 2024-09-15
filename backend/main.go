package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/Kanyapron/config"
	"github.com/Kanyapron/controller/member"
	"github.com/Kanyapron/middlewares"
)

const PORT = "8000"

func main() {
	config.ConnectionDB()
	config.SetupDatabase()

	r := gin.Default()
	r.Use(CORSMiddleware())

	r.POST("/signup", member.SignUp)
   	r.POST("/signin", member.SignIn)


	router := r.Group("/")
	{
		router.Use(middlewares.Authorizes())
		
		router.GET("/member/:id", member.GetMember)
		router.POST("/member", member.CreateMember)
		router.PATCH("/member/:id", member.UpdateMember)
		router.DELETE("/member/:id", member.DeleteMember)
		router.GET("/member/email/:email", member.GetProfileByEmail) // สำหรับดึงข้อมูลสมาชิกตามอีเมล

	}

	r.GET("/", func(c *gin.Context) {
		c.String(http.StatusOK, "API RUNNING... PORT: %s", PORT)
	})
	r.Run("localhost:" + PORT)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
