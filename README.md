# Microservices-Node-RabbitMq


## This API is created on Node.js version > 8.9.2.
### Tools Used: Visual Studio Code
### Framework: Express 

### This App is an example of using Rabbit MQ, Erl used for creating message queues and consuming topics and fetching list of messages for communication.
### The microservice is providing two Routes, GET and POST.


### Prerequisites:
#### Install Rabbit MQ and ErLang

### Installation Steps:
#### 1. Clone this repository and do "npm install"
#### 2. Run npm start command. This will initiate API to run.
#### 3. Open Postman to check the results using two routes.
####      GET - localhost:3000 

####      POST - localhost:3000?mode=start  -> This will start publishing messages
####             localhost:3000?mode=stop   -> This will stop publishing messages
