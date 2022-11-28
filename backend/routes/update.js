const express = require('express')

// controller functions
const { getUser, updateDetails, createDetails, deleteUser } = require('../controllers/updateController')

const router = express.Router()
const requireAuth = require('../middleware/requireAuth')

// require Auth for all update requests
router.use(requireAuth)

// GET a single user
router.get('/:id', getUser)

// DELETE details from a user doc
router.delete('/:id', deleteUser)

// UPDATE user details
router.patch('/:id', updateDetails)

// CREATE user details
router.post('/:id', createDetails)


module.exports = router