const jwt = require('jsonwebtoken')
const requireAuth = (req, res, next) => {

  // check authentication
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization required'})
  }

  // split the token to just catch the token ID itself

  const token = authorization.split(' ')[1]
  
  try {
    const {_id} = jwt.verify(token, process.env.SECRET)

    req.registeredUser = await User.findOne({_id}).select('_id')
    next()

  } catch (error)  {
    console.log(error)
    return res.status(401).json({error: 'Unauthenticated request'})
 }
}

module.exports = requireAuth