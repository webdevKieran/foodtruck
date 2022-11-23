const User = require('../models/userModel')
const mongoose = require('mongoose')

// createDetails, getUser, deleteUser, need to be secured


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

// update details to user document
const updateDetails = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'These details were not found'})
  }
  const details = await User.findOneAndUpdate({_id: id}, {
    ...req.body
  } )
  
  if (!details) {
    return res.status(400).json({error: 'These details were not found'})
  }
  res.status(200).json(details)

}


// add details to user document

/* was using same approach as updateDetails but need to modify */

const createDetails = async (req, res) => {
  const { id } = req.params
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
    // add doc to db
    try{
      const user_id = req.user._id
      const details = await User.create({details:{businessName, contactNumber, descrip, posLat, posLng, user_id}})
      res.status(200).json(details)
    } catch (error){
      res.status(400).json({error: error.message})
    }
}

// delete a user

const deleteUser = async (req, res) => {
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


module.exports = { getUser, updateDetails, createDetails, deleteUser  }