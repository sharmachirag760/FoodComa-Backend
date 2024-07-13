const express = require('express')
// const bodyParser = require('body-parser')
const serverConfig = require('./Config/serverConfig');
const connectDB = require('./Config/dbConfig');
const app = express();
app.use(express.json({extended : true}))
app.use(express.text({extended : true}))
app.use(express.urlencoded({extended : true}))

app.post("/ping",(req,res)=>{
    console.log(req.body)
    return res.json({message : "pong"})
})

app.listen(serverConfig.port, async () => {
    await connectDB();
    console.log(`server started at ${serverConfig.port} port `)

})
