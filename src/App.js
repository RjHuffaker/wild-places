import React, { useState } from 'react';
import './App.css';
import MapComponent from './components/MapComponent';
import placesListData from './placesListData';

function App() {

  const [placesList, setPlacesList] = useState(placesListData);

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
    <div className="flex flex-column items-center">
      <h1 className="f1">Wild Places</h1>
      <div style={{"width":"400px"}}>
        <p>
          In May of 2021, we sold our home in the suburbs and purchased a truck and 30ft travel trailer. On June 1st, 2021 we then embarked upon a journey of indeterminate length and destination, an adventure that is still in the making to this day.
        </p>
        <p>
          It would be impossible to relate all of the wild and outlandish things that we have experienced, but here is a map displaying all of the places where we have stayed for a night or more. Click on a marker for a brief description of each location.
        </p>
        <p>
          You can also add, edit, and delete places, but any changes will not be persisted to memory. Ignore the "map not loaded correctly" message, this is still under development.
        </p>
      </div>
      <MapComponent
        placesList={placesList}
        onPlaceSubmit={onPlaceSubmit}
        onPlaceUpdate={onPlaceUpdate}
        onPlaceDelete={onPlaceDelete}
      />
    </div>
  );
}

export default App;
