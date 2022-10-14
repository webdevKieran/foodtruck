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

// login route
router.post('/login', loginUser)

// sign-up route
router.post('/signup', signupUser)


// GET all users
router.get('/', getUsers)

// GET a single user
router.get('/:id', getUser)


// DELETE details from a user doc
router.delete('/:id', deleteDetails)

// UPDATE user details
router.patch('/:id', updateDetails)

// CREATE user details
router.patch('/:id', createDetails)

module.exports = router
