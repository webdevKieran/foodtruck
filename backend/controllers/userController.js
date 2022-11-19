const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

// how to create token and use MongoDB id in the payload

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})

}

// login user with method from userModel
const loginUser = async (req, res) => {
  const {email, password} = req.body


  try {
    const user = await User.login(email, password)

    // create token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error){
    res.status(400).json({error: error.message})
  }

}


// sign-up user
const signupUser = async (req, res) => {
  const {email, password} = req.body 
  
  try {
    const user = await User.signup(email, password)

    // create token
    const token = createToken(user._id)

    res.status(200).json({email, token})
  } catch (error){
    res.status(400).json({error: error.message})
  }

}

// get all users --> this will be narrowed down to just the detail 
// to populate the appropriate infobox on the map marker

// query find(), if no condition specified, attempts to return all docs
// but cannot select 'details' if that doesn't exist, so it crashes

const getUsers = async (req, res) => {
  const users = await User.find({details: {$exists: true} }).select('details')

  res.status(200).json(users)
}

// get a single User
const getUser = async(req,res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
  }

  const user = await User.findById(id)

  if (!user) {
    return res.status(404).json({error: 'No such user'})
  }

  res.status(200).json(user)
}

// create aditional fields in the user document


const createDetails = async (req, res) => {
  const {businessName, contactNumber, descrip, posLat, posLng} = req.body

  let emptyFields = []
  if(!businessName) {
    emptyFields.push('businessName')
  }
  if(!contactNumber) {
    emptyFields.push('contactNumber')
  }
  if(!descrip) {
    emptyFields.push('descrip')
  }
  if(!posLat) {
    emptyFields.push('posLat')
  }
  if(!posLng) {
    emptyFields.push('posLng')
  }

  // section below asks for all details but that isn;t necessary just yet KF 14-10-2022


//  if(emptyFields.length >0) {
//    return res.status(400).json({error: 'Please fill in all fields', emptyFields })
//  }

}


const deleteDetails = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
  }
  const user = await User.findOneAndDelete({_id: id})
  
  if (!user) {
    return res.status(400).json({error: 'No such user'})
  }
  res.status(200).json(user)

}

// update a User

const updateDetails = async (req, res) => {
  const { id } = req.params
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such user'})
  }
  const user = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  } )
  
  if (!user) {
    return res.status(400).json({error: 'No such user'})
  }
  res.status(200).json(user)
}





module.exports = { signupUser, loginUser, getUser, getUsers, updateDetails, deleteDetails }