const express = require('express')
const downloadRoute = require("./Routes/downloads")
const {connectToMongoDb} = require("./db")
const PORT = 3000 || process.env.PORT

const app = express()
connectToMongoDb()

app.use("/download", downloadRoute)
app.get("/", (req, res)=>{
    res.send("Hello and welcome")
})


app.listen(PORT, () =>{
    console.log("server started on port 3000")
})
