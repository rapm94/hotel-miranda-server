FROM node:17-bullseye-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]