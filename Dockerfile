FROM node:latest as build

WORKDIR /app 

COPY package.json /app/package.json

RUN npm install --omit=dev 

COPY . .

RUN npm run build 

FROM nginx:latest

COPY --from=build /app/build /usr/share/nginx/html 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]