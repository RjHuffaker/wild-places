import React from 'react';

import MapComponent from './components/MapComponent';

function App() {

  const placesList = [
    { lat: 40.54149320752432, lng: -112.31041498069737 },
    { lat: 40.52149320752432, lng: -112.32051498069727 },
    { lat: 40.55963900732105, lng: -112.30175993300523 },
    { lat: 40.52963900733105, lng: -112.29165993301523 },
    { lat: 40.56963900734105, lng: -112.33195993302523 }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wild Places</h1>
      </header>
      <div>
        <MapComponent
          placesList={placesList}
        />
      </div>
    </div>
  );
}

export default App;
