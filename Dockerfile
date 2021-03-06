FROM node:10-stretch-slim as builder
WORKDIR /usr/src/app
COPY txt2speech-ui/package.json ./

COPY txt2speech-ui ./
#COPY .env ./

RUN yarn
COPY txt2speech-ui ./
RUN yarn build

EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "src/server.js" ]