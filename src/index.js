const express = require('express')
const bodyParser = require('body-parser')
const serverConfig = require('./Config/serverConfig');
const connectDB = require('./Config/dbConfig');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded())


app.listen(serverConfig.port, async () => {
    await connectDB();
    console.log(`server started at ${serverConfig.port} port `)

})
