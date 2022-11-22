const express = require('express')

// controller functions
const { getDetails } = require('../controllers/detailsController')

const router = express.Router()

//get all the details for all the foodtrucks

router.get('/', getDetails)


module.exports = router