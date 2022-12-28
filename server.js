const express = require('express')
const downloadRoute = require("./Routes/downloads")
const {connectToMongoDb} = require("./db")

const app = express()
connectToMongoDb()

app.use("/download", downloadRoute)
app.get("/", (req, res)=>{
    res.send("Hello and welcome")
})


app.listen(3000, () =>{
    console.log("server started on port 3000")
})