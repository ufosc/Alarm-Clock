package webhook

import (
	"fmt"
	"log"
	"os"
	"testing"
)

func TestSendMessage(t *testing.T) {
	var username = "Wake Up"
	var content = "Simple Message"

	var title = "Testing Embed"
	var description = "Embed Description."
	var color = "383483" // Must be a numerical value not nex
	var url2 = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXluOXlraTJzNzU1eHhqdnNta2xld3l2anA0bG0zemM1NTBiajIxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qpCvOBBmBkble/giphy.webp"

	webhookTest := NewDiscordWebHook(username, content, title, description, color, url2)

	cwd, err := os.Getwd()
	fmt.Println(cwd)

	// err := godotenv.Load(".env")

	if err != nil {
		log.Fatal(err)
	}

	webhookURL := os.Getenv("DISCORD_WEBHOOK")

	if err := webhookTest.SendMessage(webhookURL); err != nil {
		t.Logf("Discord Webhook did not executre properly")
	}

}
