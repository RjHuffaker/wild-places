import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '900px',
  height: '500px'
};

const center = {
  lat: 40.54149320752432,
  lng: -112.31041498069737
};

function createContentString(place){
  const contentString = 
    "<div>"+
      "<div>"+
        "<h3>"+place.title+"</h3>"+
      "</div>"+
      "<div>"+
        "<span><strong>Description:</strong> "+place.description+"</span>"+
      "</div>"+
      "<div>"+
        "<span><strong>Location:</strong> "+place.lat+", "+place.lng+"</span>"+
      "</div>"+
    "</div>";
  return contentString;
}

function MapComponent({placesList, placeData, onMapClick}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBi54ehlrrs28I7qEeU1jA6mJKB0If9KkI"
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
    placesList.map((place,i) => {
      const marker = new window.google.maps.Marker({
        position: {lat: place.lat, lng: place.lng},
        map,
        title: place.title,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: createContentString(place)
      });
      marker.addListener("click", () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });
      return marker;
    });

    window.google.maps.event.addListener(map, 'click', function(event) {
    //  onMapClick(event.latLng.toJSON());
    //  placeMarker(event.latLng);
      openAddMarkerWindow(event);
    });
    
    function openAddMarkerWindow(event){
      const marker = new window.google.maps.Marker({
        position: event.latLng,
        map
      });
      
      const addMarkerWindow = new window.google.maps.InfoWindow({
        title: "Add Place",
        content: 
        "<div>"+
          "<input type='text' value='title' />"+
        "</div>"+
        "<div>"+
          "<button onClick={clickMe()}>Click Me</button>"+
        "</div>"
      });

      addMarkerWindow.open({
        anchor: marker,
        map,
      });
    }

    function clickMe(event){
      console.log("This probably won't work");
    }

    function placeMarker(location) {
      var marker = new window.google.maps.Marker({
        title: "New",
        description: "Stuff",
        position: location, 
        map,
        optimized: false,
        draggable: true
      });
      placesList.push({
        title: "New",
        description: "Stuff",
        lat: location.lat,
        lng: location.lng
      });
      map.panTo(location);
    }

    function addMarker(location){
      placesList.push({
        title: placeData,
        description: "Stuff",
        lat: location.lat,
        lng: location.lng
      });
    }

    return map;
  }, [placesList, placeData, onMapClick]);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    ></GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)