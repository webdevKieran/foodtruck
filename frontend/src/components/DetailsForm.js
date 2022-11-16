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
    dispatch({type: 'CREATE_WORKOUT', payload: json})
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
        className={emptyFields.includes('businessName') ? 'error':'form-control'}
        /><p />

      <label className='form-label'>Contact Telephone Number:</label>
      <input
        type="number"
        onChange={(e) => setContactNumber(e.target.value)}
        value={contactNumber}
        className={emptyFields.includes('contactNumber') ? 'error':'form-control'}
        /><p />

      <label className='form-label'>Description:</label>
      <textarea
        type="text"
        onChange={(e) => setDescrip(e.target.value)}
        value={descrip}
        id='exampleFormControlTextarea1'
        rows='3'
        className={emptyFields.includes('descrip') ? 'error':'form-control'}
        />
        
        <input type="text"
        onChange={(e) => setPosLat(e.target.value)}
        value={GeoLocation.lat}
        className={emptyFields.includes('posLat') ? 'error':'form-control'}
        hidden="true"
        />
        <input type="text"
        onChange={(e) => setPosLng(e.target.value)}
        value={GeoLocation.lng}
        className={emptyFields.includes('posLng') ? 'error':'form-control'}
        hidden="true"
        /><p />

        <button className='btn btn-warning btn-lg'> Update Your Business Details</button>
        {error && <div className="error">{error}</div>}
        </form>


    </div>
  )

}


export default DetailsForm