

const express = require('express')
const router = express.Router()

// connection
const _connection = require('../../connection/_connections')

// model
const games = require('../../model/games')

// return all images
router.get('/',(req,res)=>{
  games.find({},(err,images) => {
    if(err){
      return console.log(err)
    }
    res.json(images)
  })
})


// single image
router.get('/image ',(req,res)=>{
  games.find({},(err,images) => {
    if(err){
      return console.log(err)
    }
    res.json(images)
  })
})

module.exports = router