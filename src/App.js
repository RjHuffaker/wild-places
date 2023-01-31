import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import PlacesMap from './routes/places-map/places-map.component';
import Authentication from './routes/authentication/authentication.component';
import './App.css';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/map' element={<PlacesMap />}></Route>
        <Route path='/auth' element={<Authentication />}></Route>
      </Route>
    </Routes>
    
  );
}

export default App;
