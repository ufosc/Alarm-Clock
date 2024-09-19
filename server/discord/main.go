package main

import (
	"flag"
	"fmt"
	"log"
	"os"

	"github.com/bwmarrin/discordgo"
)

var (
	Token	string
)
// Init flags
func init() {
	flag.StringVar(&Token, "t", "", "Bot Token")
	flag.Parse()

	if Token == "" {
		flag.Usage()
		os.Exit(1)
	}
}

func main() {
	session, _ := discordgo.New("Bot " + Token)

	session.AddHandler(func(s *discordgo.Session, r *discordgo.Ready) {
			fmt.Println("Bot online")
	}) 

	err := session.Open()
	if err != nil {
		log.Fatalf("Cannot open the session: %v", err)
	}
	defer session.Close()
			
	


}

