package main

import (
	"log"

	"github.com/gtuk/discordwebhook"
)

func send_example_message(discord_webhook string) {
	var username = "Wake Up"
	var content = "Simple Message"

	var title = "Testing Embed"
	var description = "Embed Description."
	var color = "383483" // Must be a numerical value not nex
	var url2 = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXluOXlraTJzNzU1eHhqdnNta2xld3l2anA0bG0zemM1NTBiajIxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qpCvOBBmBkble/giphy.webp"

	image := discordwebhook.Image{
		Url: &url2,
	}

	embeds := discordwebhook.Embed{
		Title:       &title,
		Description: &description,
		Color:       &color,
		Image:       &image,
	}

	message := discordwebhook.Message{
		Username: &username,
		Content:  &content,
		Embeds:   &[]discordwebhook.Embed{embeds},
	}

	err := discordwebhook.SendMessage(discord_webhook, message)
	if err != nil {
		log.Fatal(err)
	}
}
