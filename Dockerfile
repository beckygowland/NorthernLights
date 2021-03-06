FROM node:8

# Create app directory
WORKDIR /usr/src/app

ENV PORT 8000
ENV SSL false

# Install app dependencies
COPY . ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
#COPY . .

EXPOSE 8000

CMD npm run build && npm run prod-start