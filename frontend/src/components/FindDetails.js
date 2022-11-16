import {useEffect,useState} from 'react'

// poll the coordinates and position on the map
const FindDetails=()=> {
  const [foodtruck, setFoodtruck] = useState([])


// get all the locations from the api
  useEffect (() => {
  const fetchDetails = async () => {
    const response = await fetch('/api/user')
    const json = await response.json([])
    
    if(response.ok) {
      console.log("Data from Mongodb",...json)
      setFoodtruck(json)
    }
  }
    fetchDetails()
  }, [])
  
return ( 
  <div className='container'> 
    <h3>Here are the found food trucks:</h3> 
    <div className='card-group'> 
    {foodtruck && foodtruck.map((user) =>( 
      <span className='card' key={(user._id)}> 
        <div className='card-body'> 
          <h5>Business: {user.details.businessName}</h5> 
          Contact: {user.details.contactNumber}<br /> 
          Description: {user.details.descrip}<br /> 
          Lat: {user.details.posLat} Long: {user.details.posLng} 
        </div>
      </span> 
    ))} 
    </div> 
  </div> 
  ) 

}

export default FindDetails