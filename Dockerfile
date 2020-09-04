# Setting base image
FROM node:lts-alpine

# Setting working directory
WORKDIR /app

# Adding `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Installing and cache app dependencies
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
RUN yarn install
RUN yarn global add @vue/cli

# start app
CMD ["yarn", "serve"]
