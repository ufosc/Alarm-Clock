package webhook

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	"ufosc/alarm-clock/internal/utils"
)

func RegisterRoutes(router *mux.Router) {
	router.HandleFunc("/discord/webhook", handleDiscordWebHook).Methods(http.MethodPost)

}

func handleDiscordWebHook(w http.ResponseWriter, r *http.Request) {
	//Create Webhook (This a JSON req object)
	// var username = "Wake Up"
	// var content = "Simple Message"

	// var title = "Testing Embed"
	// var description = "Embed Description."
	// var color = "383483" // Must be a numerical value not nex
	// var url2 = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXluOXlraTJzNzU1eHhqdnNta2xld3l2anA0bG0zemM1NTBiajIxYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qpCvOBBmBkble/giphy.webp"

	d := DiscordWebHook{}
	if err := utils.ParseJSON(r, &d); err != nil {
		log.Fatal(err)
	}

	webhookExample := NewDiscordWebHook(d.Username, d.Content, d.Title, d.Description, d.Color, d.ImgURL)

	fmt.Println("Webhook activated")

	if err := godotenv.Load("../.env"); err != nil {
		log.Fatal(err)
	}

	token := os.Getenv("DISCORD_WEBHOOK")

	webhookExample.SendMessage(token)
	utils.WriteJSON(w, http.StatusOK, "Discord Webhook sent")

}
