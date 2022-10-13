const express = require('express')

// controller functions
const { 
  signupUser, 
  loginUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser
 } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// sign-up route
router.post('/signup', signupUser)


// GET all users
router.get('/', getUsers)

// GET a single user
router.get('/:id', getUser)


// DELETE a user
// router.delete('/:id', deleteUser)

// UPATE a user
//router.patch('/:id', updateUser)

module.exports = router
