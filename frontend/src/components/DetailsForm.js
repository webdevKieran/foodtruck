import { useState, useEffect } from 'react'
import { useDetailsContext } from '../hooks/useDetailsContext'
import {useAuthContext} from '../hooks/useAuthContext'

// update the business details
const DetailsForm = () => {
  const { dispatch } = useDetailsContext
  const [businessName, setBusinessName ] = useState('')
  const [contactNumber, setContactNumber ] = useState('')
  const [descrip, setDescrip ] = useState('')
  const [posLat, setPosLat ] = useState('')
  const [posLng, setPosLng ] = useState('')
  const [error, setError] = useState('')


  //you need to be logged in
    const {user} = useAuthContext()

  // get the co-ordinates for details
  useEffect (()=> {
    getCoords();
  }, []);
   
  // if no geolocation place a default marker on the Spire in Dublin, else get them
   const getCoords = async function(){
     if(!("geolocation" in navigator)){
       setError('Geolocation is not supported. Setting default marker.')
       console.log(error)
     }
     navigator.geolocation.getCurrentPosition(async function(pos){
       setPosLat(pos.coords.latitude)
       setPosLng(pos.coords.longitude)
  // if there is an error, like prompt for access to locatin is denied, log the error.  
     }
     , function(err){
      setError("User denied geo access")
      })}

  const handleSubmit = async (e) => {
    e.preventDefault()

    const details = {
      businessName, 
      contactNumber,
      descrip,
      posLat,
      posLng }

      // timeout of fetch request

    const response = await fetch('/api/update/details', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

  const json = await response.json()

  if(!response.ok) {
    setError(json.error)
  }
  if(response.ok) {
    setBusinessName('')
    setContactNumber('')
    setDescrip('')
    setError(null)
    console.log('foodtruk details added', json)
    dispatch({type: 'CREATE_DETAILS', payload: json})
  }
  }

  return(
    <div className='container formBg'>
    
    <form className="detailsForm" onSubmit={handleSubmit}>
      <h3>Update your business details</h3>

      <label className='form-label'>Business Name:</label>
      <input
        type="text"
        onChange={(e) => setBusinessName(e.target.value)}
        value={businessName}
        className='form-control'
        /><p />

      <label className='form-label'>Contact Telephone Number:</label>
      <input
        type="number"
        onChange={(e) => setContactNumber(e.target.value)}
        value={contactNumber}
        className='form-control'
        /><p />

      <label className='form-label'>Description:</label>
      <textarea
        type="text"
        onChange={(e) => setDescrip(e.target.value)}
        value={descrip}
        id='exampleFormControlTextarea1'
        rows='3'
        className='form-control'
        />
        
        <input type="text"
        onChange={(e) => setPosLat(e.target.value)}
        value={posLat}
        className='form-control'
        hidden="true"
        />
        <input type="text"
        onChange={(e) => setPosLng(e.target.value)}
        value={posLng}
        className='form-control'
        hidden="true"
        /><p />

        <button className='btn btn-warning btn-lg'> Update Your Business Details</button>
        {error && <div className="error">{error}</div>}
        </form>


    </div>
  )

}


export default DetailsForm