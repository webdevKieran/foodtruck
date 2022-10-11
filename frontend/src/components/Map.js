import { useMemo } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';


// this is going to load the Google map from the Google Maps Platform
// test data is being supplied for now
// this will become dynamic data for each foodtruck

// GoogleMap is the layout of the initial map shown to user
// Marker is supplied for each foodtruck


function Map() {

  
// load the defalut map position which won't be re-rendered with the map each time because no dependencies:
const centreMap = useMemo(() => ({ lat: 52, lng: -8 }), []);
const mapOptions = useMemo(() => ({
  disableDefaultUI: true,
  mapId: "4408b1486b24d7f3" 
}),[])

  return <GoogleMap 
    zoom={8} 
    center={ centreMap }
    options={ mapOptions} 
    mapContainerClassName="map-container" 
    >

  <MarkerF position={{ lat: 52, lng: -8,}} ></MarkerF>
    </GoogleMap>
}

export default Map