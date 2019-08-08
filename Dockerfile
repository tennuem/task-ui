FROM node:10.16 as build
WORKDIR /usr/src/task-ui
COPY . /usr/src/task-ui
RUN npm install

FROM node:10.16-alpine
WORKDIR /usr/src/task-ui
COPY --from=build /usr/src/task-ui /usr/src/task-ui
CMD ["npm", "start"]