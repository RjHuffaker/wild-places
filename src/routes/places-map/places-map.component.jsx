import { useContext } from 'react';
import MapContainer from '../../components/map-container/map-container.component';

import { PlacesContext } from '../../contexts/places.context';

function PlacesMap() {

  const { places, setPlaces, createPlace, updatePlace, deletePlace } = useContext(PlacesContext);

  const onPlaceSubmit = (place) => {
    createPlace(place);
  }

  const onPlaceUpdate = (place) => {
    updatePlace(place);
  }

  const onPlaceDelete = (place) => {
    deletePlace(place);
  }

  return (
    <div className="flex flex-column items-center" style={{height: '80%'}}>
      <MapContainer
        places={places}
        onPlaceSubmit={onPlaceSubmit}
        onPlaceUpdate={onPlaceUpdate}
        onPlaceDelete={onPlaceDelete}
      />
    </div>
  );
}

export default PlacesMap;
