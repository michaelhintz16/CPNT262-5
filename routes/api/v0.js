

const express = require('express')
const router = express.Router()

// data my image gallery
const myImages = require('../../data/images.js')


router.get('/',(req,res)=>{
  res.status(200)
  res.json(myImages)
})


module.exports = router