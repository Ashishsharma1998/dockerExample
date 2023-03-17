FROM node:latest

WORKDIR /user/app

COPY . .

RUN npm i

EXPOSE 5000

CMD node server.js
