import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import fs, { readdirSync } from 'fs'

const app = express()
require('dotenv').config()


mongoose
    .connect(process.env.DATABASE,{useNewUrlParser: true})
    .then(()=> console.log('db conectada'))
    .catch((err)=> console.log('error----',err))

app.use(cors())

app.use(morgan('dev'))
readdirSync('./routes').map((r)=> app.use('/api',require(`./routes/${r}`)))

const port = process.env.PORT || 5000


app.listen( port , ()=> {
    console.log('corriendo')
})
