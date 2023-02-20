FROM node:14-alpine

COPY ./package.json /team-wetrekking/
COPY ./yarn.lock /team-wetrekking/
WORKDIR /team-wetrekking/

RUN yarn install

COPY . /team-wetrekking/

CMD yarn start:dev