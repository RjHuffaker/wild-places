import React, { useState } from 'react';

import MapComponent from './components/MapComponent';

function App() {

  const [placesList, setPlacesList] = useState([
    { title: "Place 1", description: "asdffdsa", position: { lat: 40.54149320752432, lng: -112.31041498069737 }, id: 1 },
    { title: "Place 2", description: "rewqrew", position: { lat: 40.52149320752432, lng: -112.32051498069727 }, id: 2 },
    { title: "Place 3", description: "rewq", position: { lat: 40.55963900732105, lng: -112.30175993300523 }, id: 3 },
    { title: "Place 4", description: "gdsagf", position: { lat: 40.52963900733105, lng: -112.29165993301523 }, id: 4 },
    { title: "Place 5", description: "ttrewtre", position: { lat: 40.56963900734105, lng: -112.33195993302523 }, id: 5 }
  ]);

  const onPlaceSubmit = (placeData) => {
    let newPlace = placeData;
    newPlace.id = placesList.length+1;
    placesList.push(placeData);
    setPlacesList(placesList);
    console.log(placesList);
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
