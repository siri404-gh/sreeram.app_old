FROM node:latest
WORKDIR /usr/src/app
COPY package.json /tmp/package.json
COPY package-lock.json /tmp/package-lock.json
RUN cd /tmp && npm i
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
WORKDIR /opt/app
COPY .babelrc /opt/app/.babelrc
EXPOSE 5000
CMD [ "./node_modules/.bin/webpack-dev-server", "--config=webpack/webpack.config.js", "--env=dev", "--hot", "--inline", "--host=0.0.0.0"]
