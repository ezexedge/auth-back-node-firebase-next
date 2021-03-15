const express = require('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv').config()


mongoose
    .connect(process.env.DATABASE,{useNewUrlParser: true})
    .then(()=> console.log('db conectada'))
    .catch((err)=> console.log('error----',err))

const port = process.env.PORT || 5000

app.listen( port , ()=> {
    console.log('corriendo')
})
