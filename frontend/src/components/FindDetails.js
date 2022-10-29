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
  <div>
    Here are the found food trucks:
    {foodtruck && foodtruck.map((user) =>(
      <p key={user._id}>USER DETAILS:<br/> 
      ID {user._id}  <br/>
      { /* Details {user.details} */}
      
      

      </p>
    ))}
  </div>
  )

}
export default FindDetails