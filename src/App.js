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
        <Route index element={<PlacesMap />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/auth' element={<Authentication />}></Route>
        <Route path='/wild-places' element={<PlacesMap />}></Route>
      </Route>
    </Routes>
    
  );
}

export default App;
