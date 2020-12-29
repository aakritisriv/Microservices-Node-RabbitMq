// Importing app file to entry point
const app = require('./app')
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Microservices API is running on port ' + port)
})