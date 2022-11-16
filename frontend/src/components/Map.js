import { useState, useEffect, useMemo } from 'react';
import { GoogleMap, MarkerF, InfoWindow } from '@react-google-maps/api';


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
  

/* active marker bit influenced by a code sandbox for simple map I saw once but coudn't find original author */
// v v v v v v
//
// test the infoWindow
const markers = [
  {
    id: 1,
    name: "Me",
    position: { lat: parseFloat(myLat), lng: parseFloat(myLong) },
    descrip: "Here I am!"
  },
  {
    id: 2,
    name: "Trucker Burgers",
    position: { lat: 52.993 , lng: -6.983 },
    descrip: "Here I am!"
  },
  {
    id: 3,
    name: "Athy Coffee",
    position: { lat: 53, lng: -7 },
    descrip: "Here I am!"
  },
  {
    id: 4,
    name: "Dublin Burgers",
    position: { lat: 53.35092, lng: -6.26029 },
    descrip: "Here I am!"
  },
]
  const [ activeMarker, setActiveMarker ] = useState(null)

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
// ^ ^ ^ ^ 


// load the defalut map position which won't be re-rendered with the map each time because no dependencies:
const centreMap = useMemo(() => ({ lat: 53, lng: -8 }), []);
const mapOptions = useMemo(() => ({
  disableDefaultUI: true,
  mapId: "4408b1486b24d7f3" 
}),[])

  return <div> 
    <GoogleMap 
    zoom={8} 
    center={ centreMap }
    options={ mapOptions} 
    mapContainerClassName="map-container" 
    >
      onClick={() => setActiveMarker(null)}

{console.log("coordinate ", myLat, myLong)}
 {// <MarkerF position={{ lat: parseFloat(myLat), lng: parseFloat(myLong),}} ></MarkerF> 
}
  {markers.map(({ id, name, position, descrip }) => (
  <MarkerF
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div><h4>{name}</h4>{descrip}</div>
            </InfoWindow>
          ) : null}
        </MarkerF>
  ))}


  { /* <GeoCoords /> */ }
  { /* <Marker */ }
    </GoogleMap>
   {error && <div className='container-md alert alert-danger'> {error}</div>}</div>
}

export default Map