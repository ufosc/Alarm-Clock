# Discord Webhook Documentation

## Prerequisites

To run this project, you'll need to install the required Go packages:

1. Install the discordwebhook package:

```
go get github.com/gtuk/discordwebhook
```

Install the godotenv package:

```
go get github.com/joho/godotenv
```


### Create .env file

1. In the root directory of the project (where main.go is located), create a .env file.
2. Inside this .env file, define your Discord webhook URL like so:

``` 
DISCORD_WEBHOOK=<webhook url>
```

**DO NOT COMMIT THE .env FILE**

## Running the Webhook

Running the go files inside this directory requires you to run all go files associated with file that is being run.

For example:

Running main.go

```
go run main.go webhook.go
```

## Additional links 
-   [Creating Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) 
-   [Webhook Structure](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html) 
-   [Webhook github package](https://github.com/gtuk/discordwebhook?tab=readme-ov-file)