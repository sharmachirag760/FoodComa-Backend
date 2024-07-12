const express = require('express')
const serverConfig = require('./Config/serverConfig')
const app = express();
app.listen(serverConfig.port, () => {
    console.log(`server started at ${serverConfig.port} port `)
})
