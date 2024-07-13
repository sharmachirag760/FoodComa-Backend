const express = require('express')
const serverConfig = require('./Config/serverConfig');
const connectDB = require('./Config/dbConfig');
const app = express();
app.listen(serverConfig.port, async () => {
    await connectDB();
    console.log(`server started at ${serverConfig.port} port `)

})
