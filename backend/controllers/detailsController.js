const { Details } = require('../models/userModel')
const mongoose = require('mongoose')

// get the details


const getDetails = async (req, res) => {
  try{
  const allDetails = await Details.find({}).select('details');

  res.status(200).json(allDetails)
  console.log(allDetails)

  } catch (e) {
    console.log(e.message)
  }
}
module.exports = { getDetails }