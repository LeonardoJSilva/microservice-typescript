FROM node:buster-slim

RUN apt-get update \
&& apt-get clean

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD /bin/sh -c "node dist/app.js"

EXPOSE 80
EXPOSE 50051
