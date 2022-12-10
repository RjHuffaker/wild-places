import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '900px',
  height: '500px'
};

const center = {
  lat: 40.54149320752432,
  lng: -112.31041498069737
};

function MapComponent({placesList}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBi54ehlrrs28I7qEeU1jA6mJKB0If9KkI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
          {
            placesList.map((el,i) => {
              return (
                <Marker
                  key={i}
                  position={{lat: el.lat, lng: el.lng}}
                />
              );
            })
          }
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)