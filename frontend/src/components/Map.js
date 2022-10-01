import { useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';


// this is going to load the Google map from the Google Maps Platform
// test data is being supplied for now
// this will become dynamic data for each foodtruck

// GoogleMap is the layout of the initial map shown to user
// Marker is supplied for each foodtruck


function Map() {
// load the defalut map position which won't be re-rendered with the map each time because no dependencies:
const centreMap = useMemo(() => ({ lat: 52, lng: -8 }), []);

  return <GoogleMap 
    zoom={8} 
    center={ centreMap } 
    mapContainerClassName="map-container" 
    >

  <Marker position={{ lat: 52, lng: -8,}} icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}></Marker>
    </GoogleMap>
}

export default Map