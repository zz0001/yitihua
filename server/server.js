const express = require('express')
const app = express()
let http = require('http');
const server = http.createServer(app);
require('./index.js')(app,server)
server.listen(3333, () => {
    console.log(`server started at http://localhost:3333`)
})
