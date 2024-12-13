FROM node:16.14

#Create a app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app souce
COPY . .

EXPOSE 5005

CMD [ "npm", "run","watch" ]