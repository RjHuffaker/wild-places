import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { PlacesProvider } from './contexts/places.context';

import App from './App';
import './index.scss';
import 'tachyons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlacesProvider>
        <App />
      </PlacesProvider>    
    </BrowserRouter>
  </React.StrictMode>
);
