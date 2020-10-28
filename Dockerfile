FROM node:lts-alpine

WORKDIR /usr/middleware

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run-script build

EXPOSE 3000
CMD ['npm', 'run-script', 'start:prod']