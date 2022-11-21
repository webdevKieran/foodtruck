const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const requireAuth = async (req, res, next) => {

  // check authentication
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization required'})
  }

  // split the token to just catch the token ID itself

  const token = authorization.split(' ')[1]
  
  // use ID from jwt to get ID from database
  try {
    const {_id} = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({_id}).select('_id')
    next()

  } catch (error)  {
    console.log(error)
    return res.status(401).json({error: 'Unauthenticated request'})
 }
}

module.exports = requireAuth