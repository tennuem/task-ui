FROM node:12.2.0-alpine as build
WORKDIR /usr/src/task-ui
COPY . /usr/src/task-ui
RUN npm install
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/task-ui/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]