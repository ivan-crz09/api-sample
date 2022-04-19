const app = require('./server') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

module.exports = request