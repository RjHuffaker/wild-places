import { createContext, useState, useEffect } from 'react';

import {
  addDocuments,
  getAllDocuments,
  createDocument,
  updateDocument,
  deleteDocument
} from '../utils/firebase/firebase.utils';

export const PlacesContext = createContext({
  places: []
});

export const PlacesProvider = ({ children }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const getPlaces = async () => {
      const placesList = await getAllDocuments('places');
      setPlaces(placesList);
    }
    
    getPlaces();
  },[]);

  const createPlace = async (placeData) => {
    const newPlace = await createDocument('places', placeData);
    setPlaces([...places, newPlace]);
  }

  const updatePlace = async (placeData) => {
    const placeToUpdate = await updateDocument('places', placeData);

    const index = places.findIndex(obj => obj.id === placeToUpdate.id);
  
    if (index !== -1) {
      setPlaces(oldPlaces => {
        const newPlaces = [...oldPlaces];
        newPlaces[index] = placeToUpdate;
        return [...newPlaces];
      });
    } else {
      console.error('Place not found in array');
    }
  };

  const deletePlace = async (place) => {
    
    const deletedPlaceId = await deleteDocument('places', place);

    const index = places.findIndex(obj => obj.id === deletedPlaceId);
    
    if (index !== -1) {
      setPlaces((places) => places.filter((place) => place.id !== deletedPlaceId));
    } else {
      console.error('Place not found in array');
    }
  }

  const value = { places, setPlaces, createPlace, updatePlace, deletePlace };

  return (
    <PlacesContext.Provider value={value}>
      {children}
    </PlacesContext.Provider>
  );
};