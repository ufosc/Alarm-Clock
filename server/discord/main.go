package main

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	webhook_url := os.Getenv("DISCORD_WEBHOOK")
	if webhook_url == "" {
		log.Fatalf("DISCORD_WEBHOOK_URL is not set in the .env file")
	}

	fmt.Println("Sending Webhook")
	send_example_message(webhook_url)
}
