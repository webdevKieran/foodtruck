import { useState, useEffect, useMemo } from 'react';
import { GoogleMap, MarkerF, InfoWindowF } from '@react-google-maps/api';
import logo64 from '../img/logo64.png'

// GoogleMap is the layout of the initial map shown to user
// Marker is supplied for each foodtruck

function Map() {
  const [myLong, setMyLong] = useState('')
  const [myLat, setMyLat] = useState('')
  const [error, setError] = useState('')
  const [foodtruck, setFoodtruck] = useState([])

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
       setError('Geolocation is not supported. Setting default marker.')
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
  
// get all the foodtruck details from the api
// and fill in the infoWindow component
  useEffect (() => {
  const fetchDetails = async () => {
    const response = await fetch('/api/details')
    const json = await response.json([])
    
    if(response.ok) {
       setFoodtruck(json)
    }
  }
    fetchDetails()
  }, [])

// handle the active marker to show infoWindow
  const [ activeMarker, setActiveMarker ] = useState(null)

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

// load the default map position which won't be re-rendered with the map each time because no dependencies:
const centreMap = useMemo(() => ({ lat: 53, lng: -8 }), []);
const mapOptions = useMemo(() => ({
  disableDefaultUI: true,
  mapId: "4408b1486b24d7f3" 
}),[])


// render the map, with custom params
// and insert each foodtruck into the map as Marker - see MarkerF component
// insert the details from DB into each infoWindow - see infoWindowF component

  return <div> 
    <GoogleMap 
    zoom={8} 
    center={ centreMap }
    options={ mapOptions} 
    mapContainerClassName="map-container" 
    >
     {
     //onClick={() => setActiveMarker(null)} 
      }

{console.log("coordinates ", myLat, myLong)}
 <MarkerF position={{ lat: parseFloat(myLat), lng: parseFloat(myLong),}} ></MarkerF> 

  {foodtruck.map((ft) => (
  <MarkerF
          key={ft.details._id}
          position={{ lat: parseFloat(ft.details.posLat), lng: parseFloat(ft.details.posLng)}}
          onClick={() => handleActiveMarker(ft.details._id)}
          icon={logo64}
        >
          {activeMarker === ft.details._id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div><h5>{ft.details.businessName}</h5>
              <i>{ft.details.descrip}</i><br />
              Click to Call: 
              <a href={'tel:'+ft.details.contactNumber}>{ft.details.contactNumber}</a>
              </div>
            </InfoWindowF>
          ) : null}
        </MarkerF>
  ))}

    </GoogleMap>
    
    <a className="attrib" href="https://www.flaticon.com/free-icons/food-truck" title="food truck icons" >Food truck icons created by mavadee - Flaticon</a>

   {error && <div className='container-md alert alert-danger'> {error}</div>}</div>
}

export default Map