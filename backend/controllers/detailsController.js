const User = require('../models/userModel')

const getDetails = async (req, res) => {
  const details = await User.find({details: {$exists: true} }).select('details')

  res.status(200).json(details)
}

module.exports = { getDetails }