import React, { useState } from 'react';
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wild Places</h1>
      </header>
      <div style={{"display": "flex"}}>
        <div style={{"border": "1px black solid"}}>
          <MapComponent
            placesList={placesList}
            onPlaceSubmit={onPlaceSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
