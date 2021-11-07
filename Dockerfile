FROM node

WORKDIR /image

COPY . /image

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]


