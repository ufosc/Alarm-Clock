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
	// router.HandleFunc("/discord/webhook", handleDiscordWebHook).Methods(http.MethodGet)
	router.HandleFunc("/discord/webhook", handleDiscordWebHook).Methods(http.MethodGet)

}

func handleDiscordWebHook(w http.ResponseWriter, r *http.Request) {
	// TODO: Create Webhook

	fmt.Println("Webhook activated")
	err := godotenv.Load("../.env")

	if err != nil {
		log.Fatal(err)
	}

	token := os.Getenv("DISCORD_WEBHOOK") 

	SendMessageExample(token)
	utils.WriteJSON(w, http.StatusOK, "Discord Webhook sent")

}