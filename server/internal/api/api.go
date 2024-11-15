package api

import (
	"log"
	"net/http"
	"ufosc/alarm-clock/internal/punishments/discord/webhook"

	"github.com/gorilla/mux"
)

type APIServer struct {
	addr	string
}

func NewAPIServer(addr string) *APIServer {
	return &APIServer{
		addr: addr,
	}
}

func (s * APIServer) Run() error {
	router := mux.NewRouter()
	subrouter := router.PathPrefix("/api/v1").Subrouter()

	subrouter.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Add("Content-Type", "application/json")
		w.WriteHeader(200)
		w.Write([]byte("Hello World"))
	})

	webhook.RegisterRoutes(subrouter)

	log.Println("Listening on", s.addr)

	return http.ListenAndServe(s.addr, router)


}