import { useState } from 'react'

// import { MarkerF } from '@react-google-maps/api';
// will be used as hook exporting marker to the map
// for each logged in user.

// oringinally written to be a hook but setting as view to test first

const GeoLocation = () => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null)
  const [mssg, setMssg] = useState(null)

  const getLocation = () => {
    if (!navigator.geolocation) {
      setMssg("Your browser does not support geolocation")
    } else {
      setMssg("Getting your location...")
      navigator.geolocation.getCurrentPosition(
        (postion) => {
          setMssg(null)
          setLat(postion.coords.latitude)
          setLng(postion.coords.longitude)
        }, () => {
          setMssg("We couldn't get your location!")
        }
      )
    }
  }
  return(
    <div><button onClick={getLocation}>Find ME!</button>
      <h2>Here:</h2>
      <p>{mssg}</p>
      {lat && <p>latitude: {lat}</p>}
      {lng && <p>longitude: {lng}</p>}
    </div>
  )
}

export default GeoLocation