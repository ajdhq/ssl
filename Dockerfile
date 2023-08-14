FROM node:14.21.3

WORKDIR /app

COPY ./package.json /app
COPY ./index.js /app
COPY ./CA /app/CA
COPY ./cert /app/cert

RUN npm install

ENV PORT 8080
EXPOSE $PORT

CMD [ "npm", "start" ]

# sudo docker build . -t self-hosted
# sudo docker tag self-hosted dronahq/self-hosted
# sudo docker push dronahq/self-hosted
