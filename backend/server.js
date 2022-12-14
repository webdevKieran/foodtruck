// Express app inspired by NetNinja MERN stack tutorial 
// available on Youtube: https://youtu.be/8DploTqLstE

// load environment variables from .env file
const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const detailRoutes = require('./routes/details')
const updateRoutes = require('./routes/update')

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
  res.json({mssg: 'API is active'})
})
app.use('/api/details', detailRoutes)
app.use('/api/update', updateRoutes)
app.use('/api/user', userRoutes)

// mongoose library used to simplify interacting with MongoDB
// whenever using an async function, use promise and catch errors
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    // listen on port in dot env

// request listener
app.listen(process.env.PORT, () =>{
  console.log('Listening on port ',process.env.PORT)
})

})
.catch((error) => {
  console.log(error)
})



