require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()


const router = require("./routes/routes")
const errorMiddleHandler = require("./middleware/error-handler")
const notFound = require("./middleware/not-found")

app.use(express.static("./public"))
app.use(express.json())

app.use("/api/v1", router)
app.use(notFound)
app.use(errorMiddleHandler)
const port = process.env.Port || 3000

const start = async() => {
    try {
        app.listen(port, console.log(`Running at ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()