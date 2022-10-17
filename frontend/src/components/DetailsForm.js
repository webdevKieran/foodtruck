import { useState } from 'react'
import GeoLocation from '../views/GeoLocation'
import  { useDetailsContext } from '../hooks/useDetailsContext'

// update the business details
const DetailsForm = () => {
  const { dispatch } = useDetailsContext
  const [businessName, setBusinessName ] = useState('')
  const [contactNumber, setContactNumber ] = useState('')
  const [descrip, setDescrip ] = useState('')
  const [posLat, setPosLat ] = useState('posLat')
  const [posLng, setPosLng ] = useState('')
  const [error, setError] = useState('')
  const [emptyFields, setEmptyFields] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const details = {
      businessName, 
      contactNumber,
      descrip,
      posLat,
      posLng }

    const response = await fetch('/api/updateDetails', {
      method: 'POST',
      body: JSON.stringify(details),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  const json = await response.json()

  if(!response.ok) {
    setError(json.error)
    setEmptyFields(json.emptyFields)
  }
  if(response.ok) {
    setBusinessName('')
    setContactNumber('')
    setDescrip('')
    setError(null)
    setEmptyFields([])
    console.log('new workout added', json)
    dispatch({type: 'CREATE_DETAILS', payload: json})
  }
  }

  return(
    <div>
    <GeoLocation />
    <form className="detailsForm" onSubmit={handleSubmit}>
      <h3>Update your business details</h3>

      <label>Business Name:</label>
      <input
        type="text"
        onChange={(e) => setBusinessName(e.target.value)}
        value={businessName}
        className={emptyFields.includes('businessName') ? 'error':''}
        /><p />

      <label>Contact Telephone Number:</label>
      <input
        type="number"
        onChange={(e) => setContactNumber(e.target.value)}
        value={contactNumber}
        className={emptyFields.includes('contactNumber') ? 'error':''}
        /><p />

      <label>Description:</label>
      <textarea
        type="text"
        onChange={(e) => setDescrip(e.target.value)}
        value={descrip}
        className={emptyFields.includes('descrip') ? 'error':''}
        />
        
        <input type="text"
        onChange={(e) => setPosLat(e.target.value)}
        value={GeoLocation.lat}
        className={emptyFields.includes('posLat') ? 'error':''}
        />
        <input type="text"
        onChange={(e) => setPosLng(e.target.value)}
        value={GeoLocation.lng}
        className={emptyFields.includes('posLng') ? 'error':''}
        /><p />

        <button>Update Your Business Details</button>
        {error && <div className="error">{error}</div>}
        </form>


    </div>
  )

}


export default DetailsForm