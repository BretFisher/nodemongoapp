# Dockerized Example App: Node.js + Mongo

A very simple example of a Node web app that connects to a mongo db. Each in its own
container. I use this to illustrate many Docker concepts and techniques:

- Use `Dockerfile` to build web app locally
- Use `docker-compose.yml` to start web and mongo containers and mount source dir
so you can dev locally, and show now multiple containers can work inside an overlay
network.
- User `docker-compose.prod.yml` to run `docker-compose bundle` for creating dab 
files to deploy in production


## Potential other lessions
- Change to use `FROM node:onbuild` to show how a convenion-based node/npm app can 
get away with a single line Dockerfile for dev.
