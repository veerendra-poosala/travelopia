FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN yarn

COPY ./docker/frontend/docker-entrypoint.sh /app/  

RUN chmod +x /app/docker-entrypoint.sh  
CMD yarn run dev  