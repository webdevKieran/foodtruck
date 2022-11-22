const express = require('express')

// controller functions
const { 
  signupUser, 
  loginUser,
  getUser,
  getID,
  deleteDetails,
  updateDetails
 } = require('../controllers/userController')

const router = express.Router()

//get all the details for all the fodtrucks


// login route
router.post('/login', loginUser)

// sign-up route
router.post('/signup', signupUser)



// GET a single user
router.get('/:id', getUser)

// Get ID of current user

router.get('/getid', getID)


// DELETE details from a user doc
router.delete('/:id', deleteDetails)

// UPDATE user details
 router.patch('/:id', updateDetails)

// CREATE user details
// *this doesn't make sense since we have ID already. Commented out for now*
//
//router.patch('/:id', createDetails)

module.exports = router
