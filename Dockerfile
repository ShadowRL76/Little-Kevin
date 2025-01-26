FROM node:latest

LABEL authors="Shadow"

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y git

COPY start.sh /usr/src/app/start.sh

COPY package*.json ./
RUN npm install

RUN chmod +x /usr/src/app/start.sh

ENTRYPOINT ["/usr/src/app/start.sh"]
