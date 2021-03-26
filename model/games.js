//  Model

const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  credit: String,
  linkURL: String,
  creditURL: String
})

module.exports = Image = mongoose.model('Gallery', imageSchema)