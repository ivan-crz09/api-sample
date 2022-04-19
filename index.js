// Dependencies
const express = require('express')
const router = express.Router()
const app = express()
const routes = require("./routes/index.js")

// Const Values
const port = 3010 // pasarlo al config

//routes(router)
app.use(routes(router))


module.exports = app