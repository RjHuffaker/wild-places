import React, { useState } from 'react';

import MapComponent from './components/MapComponent';
import AddPlace from './components/AddPlace';

function App() {

  const [placesList, setPlacesList] = useState([
    { title: "Place 1", description: "asdffdsa", lat: 40.54149320752432, lng: -112.31041498069737 },
    { title: "Place 2", description: "rewqrew", lat: 40.52149320752432, lng: -112.32051498069727 },
    { title: "Place 3", description: "rewq", lat: 40.55963900732105, lng: -112.30175993300523 },
    { title: "Place 4", description: "gdsagf", lat: 40.52963900733105, lng: -112.29165993301523 },
    { title: "Place 5", description: "ttrewtre", lat: 40.56963900734105, lng: -112.33195993302523 }
  ]);

  const [placeData, setPlaceData] = useState({
    title: "", description: "", lat: 0, lng: 0
  });

  const onTitleChange = (event) => {
    setPlaceData({
      title: event.value
    });
  }

  const onDescriptionChange = (event) => {
    setPlaceData({
      description: event.value
    });
  }

  const onMapClick = (location) => {
    setPlaceData({
      lat: location.lat,
      lng: location.lng
    });
  }

  const onPlaceSubmit = () => {
    placesList.push(placeData);
    setPlacesList(placesList);
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
            onMapClick={onMapClick}
          />
        </div>
        <div style={{"border": "1px black solid"}}>
          <AddPlace
            placeData={placeData}
            onTitleChange={onTitleChange}
            onDescriptionChange={onDescriptionChange}
            onPlaceSubmit={onPlaceSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
