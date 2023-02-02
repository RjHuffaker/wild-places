import React, { useState } from 'react';
import MapContainer from '../../components/map-container/map-container.component';

import placesListData from '../../placesListData.json';

function PlacesMap() {

  const [ placesList, setPlacesList ] = useState(placesListData);

  const onPlaceSubmit = (placeData) => {
    let newPlace = placeData;
    newPlace.id = placesList.length+1;
    placesList.push(placeData);
    setPlacesList(placesList);
    console.log(JSON.stringify(placesList, null, 2));
  }

  const onPlaceUpdate = (placeData) => {
    placesList.forEach((place, i)=>{
      if(placeData && placeData.id === place.id){
        placesList[i] = placeData;
        setPlacesList(placesList);
      }
    });
    console.log(JSON.stringify(placesList, null, 2));
  }

  const onPlaceDelete = (placeData) => {
    placesList.forEach((place, i)=>{
      if(placeData && placeData.id === place.id){
        placesList.splice(i, 1);
        setPlacesList(placesList);
      }
    });
    console.log(JSON.stringify(placesList, null, 2));
  }

  return (
    <div className="flex flex-column items-center" style={{height: '80%'}}>
      <MapContainer
        placesList={placesList}
        onPlaceSubmit={onPlaceSubmit}
        onPlaceUpdate={onPlaceUpdate}
        onPlaceDelete={onPlaceDelete}
      />
    </div>
  );
}

export default PlacesMap;
