const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const bodyParser = require('body-parser')
const bootcamps = require('./router/bootcamps')
    //require the router
const connectDb = require("./config/db")
const logger = require('./middleware/logger')
    //require the logger midleware
    //Load environment varaibles

dotenv.config({
    path: './config/config.env'
});
connectDb();
const app = express();

const PORT = process.env.PORT || 5000
    //app.use(logger)
app.use(morgan())
app.use(bodyParser.json())
app.use(express.json())

app.use('/api/v1/bootcamps', bootcamps)
app.get('/', (req, res) => {
    res.send({ "message": "This is response from server" });
})
app.listen(PORT,
    console.log(`server is running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)