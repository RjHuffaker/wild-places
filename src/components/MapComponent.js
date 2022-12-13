import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindowF } from '@react-google-maps/api';

const containerStyle = {
  width: '900px',
  height: '500px'
};

const center = {
  lat: 40.54149320752432,
  lng: -112.31041498069737
};

function MapComponent({placesList, onPlaceSubmit}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBi54ehlrrs28I7qEeU1jA6mJKB0If9KkI"
  });

  const [map, setMap] = React.useState(null);

  const [mapPosition, setMapPosition] = React.useState(null);

  const [activeMarker, setActiveMarker] = useState(0);

  const [placeTitle, setPlaceTitle] = useState("");

  const [placeDescription, setPlaceDescription] = useState("");

  const onTitleChange = (event) => {
    setPlaceTitle(event.target.value);
  }

  const onDescriptionChange = (event) => {
    setPlaceDescription(event.target.value);
  }
  
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const submitNewPlace = () => {
    if(!placeTitle || !placeDescription) return;
    const newPlace = {
      title: placeTitle,
      description: placeDescription,
      position: mapPosition
    }
    setPlaceTitle("");
    setPlaceDescription("");
    setActiveMarker(null);
    onPlaceSubmit(newPlace);
  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    placesList.map((place)=>{
      return bounds.extend(place.position);
    });
    map.fitBounds(bounds);
    setMap(map)
    
    window.google.maps.event.addListener(map, 'click', function(event) {
      setActiveMarker("New Marker");
      setMapPosition(event.latLng.toJSON());
    });
    
    return map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      defaultzoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { activeMarker==="New Marker" &&
        <InfoWindowF
          id="New Marker"
          onCloseClick={()=> {setMapPosition(null); setActiveMarker(null)}}
          position={mapPosition}
        >
          <div>
            <h3>Add Place</h3>
            <div style={{"display": "flex", "flexDirection": "column"}}>
              <label htmlFor="place-title">Title</label>
              <input
                  id="place-title"
                  name="place-title"
                  type="text"
                  value={placeTitle}
                  onChange={onTitleChange}
              />
            </div>
            <div style={{"display": "flex", "flexDirection": "column"}}>
              <label htmlFor="place-description">Description</label>
              <textarea
                  id="place-description"
                  name="place-description"
                  type="text"
                  value={placeDescription}
                  onChange={onDescriptionChange}
              />
            </div>
            <div>
              <span htmlFor="place-lat">Latitude: {mapPosition.lat}</span>
            </div>
            <div>
              <span htmlFor="place-lat">Longitude: {mapPosition.lng}</span>
            </div>
            <button onClick={submitNewPlace}>Submit New Place</button>
          </div>
        </InfoWindowF>
      }
      {placesList.map(({ id, title, description, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
              <div key={id}>
                <h3>{title}</h3>
                <span>{description}</span>
              </div>
            </InfoWindowF>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)