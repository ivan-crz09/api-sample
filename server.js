// Dependencies
const express = require('express')
const router = express.Router()
const app = express()
const routes = require("./routes/index.js")

//routes(router)
app.use(routes(router))

module.exports = app