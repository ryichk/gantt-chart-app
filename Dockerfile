FROM node:16-alpine
WORKDIR /gantt-chart-app
COPY . /gantt-chart-app

RUN yarn

CMD ["yarn", "dev"]
