# Stage 1 : Build
FROM node:18 as build

WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci

COPY ./src src
COPY tsconfig*.json ./
RUN npm run build

# Stage 2 : Run prod
FROM node:18-alpine As production

WORKDIR /usr/src/app
COPY --from=build /usr/src/app/dist/ dist/
COPY --from=build /usr/src/app/node_modules/ node_modules/

CMD [ "node", "dist/main.js" ]