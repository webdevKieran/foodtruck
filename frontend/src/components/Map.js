import { useState, useEffect, useMemo } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

// this is going to load the Google map from the Google Maps Platform
// test data is being supplied for now
// this will become dynamic data for each foodtruck

// GoogleMap is the layout of the initial map shown to user
// Marker is supplied for each foodtruck

function Map() {
  const [myLong, setMyLong] = useState('')
  const [myLat, setMyLat] = useState('')
  const [error, setError] = useState('')


  // try to get the geolocation from the browser. 
  // useEffect with missing dependency intended to force only one load
  useEffect (()=> {
    getCoords();
  }, []);
   
  // if no geolocation place a default marker on the Spire in Dublin, else get them
   const getCoords = async function(){
     if(!("geolocation" in navigator)){
       setMyLat(53.349722)
       setMyLong(-6.260278)
       setError('geolocation is not supported')
       console.log(error)
     }
     navigator.geolocation.getCurrentPosition(async function(pos){
       setMyLat(pos.coords.latitude)
       setMyLong(pos.coords.longitude)
  // if there is an error, like prompt for access to locatin is denied, log the error.  
     }
     , function(err){
      setMyLat(53.349722)
      setMyLong(-6.260278)
      setError("User denied geo access")
      })
   }
  
// load the defalut map position which won't be re-rendered with the map each time because no dependencies:
const centreMap = useMemo(() => ({ lat: 53, lng: -8 }), []);
const mapOptions = useMemo(() => ({
  disableDefaultUI: true,
  mapId: "4408b1486b24d7f3" 
}),[])

  return <div> <GoogleMap 
    zoom={8} 
    center={ centreMap }
    options={ mapOptions} 
    mapContainerClassName="map-container" 
    >
{console.log("coordinate ", myLat, myLong)}
  <MarkerF position={{ lat: parseFloat(myLat), lng: parseFloat(myLong),}} ></MarkerF>
  { /* <GeoCoords /> */ }
  { /* <Marker */ }
    </GoogleMap>
   {error && <div className='container-md alert alert-danger'> {error}</div>}</div>
}

export default Map