const express = require('express')

// controller functions
const { 
  signupUser, 
  loginUser,
  getUser,
  getUsers,
  deleteDetails,
  updateDetails,
  createDetails
 } = require('../controllers/userController')

 const router = express.Router()

 // GET all users
router.get('/', getUsers)

module.exports = router
