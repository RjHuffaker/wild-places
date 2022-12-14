import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindowF } from '@react-google-maps/api';
import AddPlace from './AddPlace';
import ViewPlace from './ViewPlace';

const containerStyle = {
  width: '900px',
  height: '500px'
};

const center = {
  lat: 40.54149320752432,
  lng: -112.31041498069737
};

function MapComponent({placesList, onPlaceSubmit, onPlaceUpdate}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  });

  const [map, setMap] = React.useState(null);

  const [activePlace, setActivePlace] = useState(null);

  const onTitleChange = (event) => {
    setActivePlace((activePlace) => ({
      ...activePlace,
      title: event.target.value
    }));
  }

  const onDescriptionChange = (event) => {
    setActivePlace((activePlace) => ({
      ...activePlace,
      description: event.target.value
    }));
  }

  const onMarkerClick = (place) => {
    if (activePlace && activePlace.id === place.id) {
      return;
    }
    setActivePlace(place);
  }

  const onSaveClick = () => {
    onPlaceUpdate(activePlace);
  }

  const submitNewPlace = () => {
    setActivePlace(null);
    onPlaceSubmit(activePlace);
  }

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    placesList.map((place)=>{
      return bounds.extend(place.position);
    });
    map.fitBounds(bounds);
    setMap(map)
    
    window.google.maps.event.addListener(map, 'click', function(event) {
      setActivePlace({
        id: 0,
        title: "",
        description: "",
        position: event.latLng.toJSON()
      });
      console.log(activePlace);
    });
    
    return map;
  }, [activePlace, placesList]);

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
      { activePlace && activePlace.id===0 &&
        <InfoWindowF
          onCloseClick={()=> {setActivePlace(null)}}
          position={activePlace.position}
        >
          <AddPlace
            activePlace={activePlace}
            onTitleChange={onTitleChange}
            onDescriptionChange={onDescriptionChange}
            submitNewPlace={submitNewPlace}
          />
        </InfoWindowF>
      }
      {placesList.map((place) => (
        <Marker
          key={place.id}
          position={place.position}
          onClick={() => onMarkerClick(place)}
        >
          {activePlace && activePlace.id === place.id ? (
            <InfoWindowF
              onCloseClick={() => setActivePlace(null)}
            >
              <ViewPlace
                activePlace={activePlace}
                onTitleChange={onTitleChange}
                onDescriptionChange={onDescriptionChange}
                onSaveClick={onSaveClick}
              />
            </InfoWindowF>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : <></>
}

export default React.memo(MapComponent)