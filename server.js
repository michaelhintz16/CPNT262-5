const express = require('express')
const app =  express()
const path = require('path')
require('dotenv').config()


const index = require('./routes/index')
const v0 = require('./routes/api/v0')

app.use(express.static(path.join(__dirname,'/public')))
app.set('view engine','ejs')

// front end
app.use('/',index)

// data
app.use('/api/v0',v0)

// 404
app.use((req,res)=>{
  res.status(404)
  res.render('pages/404')
})


const PORT = process.env.PORT || 3000
app.listen(PORT,()=> { console.log(`Listening on port ${PORT}`) })
