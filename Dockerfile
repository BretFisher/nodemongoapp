FROM node:latest

COPY ./package.json /src/

WORKDIR /src

RUN npm install

EXPOSE 8080
EXPOSE 5858

COPY . /src

CMD ["npm", "start"]
