package webhook

import (
	"github.com/gtuk/discordwebhook"
)

type DiscordWebHook struct {
	Username string `json:"username"`
	Content  string `json:"content"`

	Title       string `json:"title"`
	Description string `json:"description"`
	Color       string `json:"color"`
	ImgURL      string `json:"url"`
}

func NewDiscordWebHook(
	username string,
	content string,
	title string,
	description string,
	color string,
	imgURL string,
) *DiscordWebHook {

	return &DiscordWebHook{
		Username:    username,
		Content:     content,
		Title:       title,
		Description: description,
		Color:       color,
		ImgURL:      imgURL,
	}

}

func (d *DiscordWebHook) SendMessage(webhookURL string) error {
	image := discordwebhook.Image{
		Url: &d.ImgURL,
	}

	embeds := discordwebhook.Embed{
		Title:       &d.Title,
		Description: &d.Description,
		Color:       &d.Color,
		Image:       &image,
	}

	message := discordwebhook.Message{
		Username: &d.Username,
		Content:  &d.Content,
		Embeds:   &[]discordwebhook.Embed{embeds},
	}

	err := discordwebhook.SendMessage(webhookURL, message)

	return err

}
