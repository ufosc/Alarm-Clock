package main

import (
	"log"

	"ufosc/alarm-clock/internal/api"
)

func main() {
	app := api.NewAPIServer("localhost:8080")

	if err := app.Run(); err != nil {
		log.Fatal(err)
	}

}
