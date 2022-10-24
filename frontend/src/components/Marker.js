import {useEffect} from 'react'

import { MarkerF } from '@react-google-maps/api';


// poll the coordinates and position on the map
const Marker=()=> {
  useEffect (() => {
  const fetchLocations = async () => {
    const response = await fetch('api/foodtrucks')
    const json = await response.json()

    if(response.ok) {
      console.log(json)
    }
  }
    fetchLocations()
  }, [])
  
  
const mylat = Marker.posLat();
const mylng = Marker.posLng();

<MarkerF position={{lat:{mylat}, lng:{mylng}}} ></MarkerF>

}

export default Marker