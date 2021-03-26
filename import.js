// connection
const mongoose = require('./connection/_connections')

// model
const game = require('./model/games')

// import object / your data
const seed = require('./seeds/images')

// batch process


game.insertMany(seed,(err,gallery)=>{
  if(err){ return err }
  console.log('Data import completed')
  console.log(gallery)
  mongoose.connection.close();
})

// to execute 'node import.js'