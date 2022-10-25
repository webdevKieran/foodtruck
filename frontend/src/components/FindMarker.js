import {useEffect,useState} from 'react'

import { MarkerF } from '@react-google-maps/api';


// poll the coordinates and position on the map
const FindMarker=()=> {
  const [markers, setMarkers] = useState([])

// get all the locations from the api
  useEffect (() => {
  const fetchLocations = async () => {
    const response = await fetch('/api/user')
    const json = await response.json()

    if(response.ok) {
      console.log(json)
      setMarkers(json)
    }
  }
    fetchLocations()
  }, [])
  
  /*
const mylat = Marker.posLat();
const mylng = Marker.posLng();

<MarkerF position={{lat:{mylat}, lng:{mylng}}} ></MarkerF>

}
*/

// this is just a visual test to se that I am returning what I need

// it isn;t perfect but it is a start. So happy it returns without any errors in console


return (
  <div>
    Her are the found markers:
    {markers && markers.map((details) =>(
      <p key={details._id}>USER DETAILS:<br/> 
      ID {[details._id]} <br/>


      </p>
    ))}
  </div>
)
    }
export default FindMarker