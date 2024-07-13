const express = require('express')
// const bodyParser = require('body-parser')
const serverConfig = require('./Config/serverConfig');
const connectDB = require('./Config/dbConfig');
// const User = require('./schema/userSchema')
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
//    const newUser = await User.create({
//      firstName: "chirag",
//      lastName: "sharma",
//      mobileNumber: "7737003298",
//      email: 'ab@gmail.com',
//      password: "12345678"
//    })
//    console.log("value updated")
//    console.log(newUser) 
})
