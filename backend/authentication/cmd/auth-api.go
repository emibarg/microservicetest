package main

import (
	"backend/models"
	"backend/routers"
	"flag"
	"fmt"
	"log"
	"os"
)

var (
	port = flag.String("port", "8080", "Port to listen on")
	ip   = flag.String("ip", "localhost", "IP to listen on")
)

func main() {
	flag.Parse()
	flags := models.NewFlags(*ip, *port)

	fmt.Println("Starting API on", flags.Ip, ":", flags.Port)

	logger := log.New(os.Stdout, "auth-api", 1)

	route := routers.NewRoute(logger, flags)

	engine := route.RegisterRoutes()

	url, _ := flags.GetApplicationUrl()

	engine.Run(*url)
}
