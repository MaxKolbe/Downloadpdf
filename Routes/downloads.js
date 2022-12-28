const express = require("express")
const request = require('request');
const fs = require("fs")
const pdfModel = require("../models/pdfModel")

const router = express.Router()

router.get("/", (req, res)=>{
  res.send("Welcome to the pre-download page")
})
router.get("/:id", async (req, res)=>{
  const id = req.params.id
  try{
    const pdf = await pdfModel.findById(id)
    const url = pdf.url
    request.head(url, (err, response) => {
      request(url)
        .pipe(fs.createWriteStream(pdf.fileName + ".pdf"))
        .on('close', () => {
          res.send('File downloaded!');
        })
    }) 
  }catch(err){
    res.redirect("/")
    console.log(`There was an error: ${err}`)
  }
})

module.exports = router