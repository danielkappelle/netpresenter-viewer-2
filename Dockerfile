FROM node:10
RUN npm install -g bower
RUN npm install -g grunt-cli

RUN mkdir -p /srv/app/client
WORKDIR /srv/app

COPY package*.json /srv/app/
COPY client/package*.json /srv/app/client/
COPY client/bower.json /srv/app/client

RUN npm install
RUN cd client && bower install --allow-root --force-latest && npm install

COPY . /srv/app

RUN cd client && grunt

EXPOSE 3000

CMD ["npm", "start"]
