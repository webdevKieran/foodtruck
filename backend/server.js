// Express app inspired by NetNinja MERN stack tutorial 
// available on Youtube: https://youtu.be/8DploTqLstE


// load environment variables from .env file
const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


// mongoose library used to simplify interacting with MongoDB

// const userRoutes = require('./routes/user')

// express backend application
const app = express()

// middleware - uses next() to move unmatched request to next route
app.use(express.json())

app.use((req, res, next) =>{
  console.log(req.path, req.method)
  next()
})


// routes
app.get('/', (req, res) => {
  res.json({mssg: 'Helo world'})
})

// request listener
app.listen(process.env.PORT, () =>{
  console.log('Listening on port ',process.env.PORT)
})




