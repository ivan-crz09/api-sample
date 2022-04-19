const app = require('./server.js')

// Const Values
const port = 3010 // pasarlo al config

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})