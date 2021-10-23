FROM node

WORKDIR /image

COPY . /image

RUN npm install

RUN ls -al

EXPOSE 2000

CMD ["npm", "start"]


