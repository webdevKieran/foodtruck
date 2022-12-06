import React from 'react'
import Map from './Map'
import { useLoadScript } from '@react-google-maps/api'

// influenced by Leigh Halliday Google Maps Platform tutorials
// placeholder while the map is loading, so it loads in right order

 function LoadMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
 
  })

  if (!isLoaded) return <div> loading... </div>;
  return <Map />;
}

export default LoadMap