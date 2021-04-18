FROM node:11.15.0
RUN mkdir -p /app/node_modules && chown -R node:node /app

WORKDIR /app
COPY package*.json ./

USER node
RUN npm i 
COPY --chown=node:node . .

CMD node app.js

EXPOSE 3000