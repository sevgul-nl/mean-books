FROM node:11.2.0-alpine

RUN apk add --no-cache curl-dev libzip-dev autoconf build-base gmp-dev coreutils python

RUN mkdir -p /usr/src/abooks
WORKDIR /usr/src/abooks
COPY . /usr/src/abooks

RUN npm i

EXPOSE 3000

CMD ["npm", "start"]