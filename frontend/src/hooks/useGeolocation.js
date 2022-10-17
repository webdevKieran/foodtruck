import { useState, useContext } from 'react'
import { AuthContext } from './useAuthContext'


export const useGeolocation = () => {
  const context = useContext(AuthContext)

  
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
    return { mssg, lat, lng }

  }
}