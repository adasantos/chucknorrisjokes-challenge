import React, { createContext, useContext, useState, useCallback } from 'react';

import api from '../services/api'

const JokeContext = createContext(
  {
    joke: {},
    category: '', 
    setCategory: () => {},
    getJoke: () => {}  
  }
)

export const JokeProvider = ({ children }) => {
  const [category, _setCategory] = useState('');
  const [joke, _setJoke] = useState({});

 
  const getJoke = useCallback( async (category) => {
    const response = await api.get(`random?category=${category}`)

    _setJoke(response.data);
  }, []);

  const setCategory = useCallback(async ( selectedCategory ) => {
    _setCategory(selectedCategory);

    await getJoke(selectedCategory);
  }, [getJoke]);


  return (
    <JokeContext.Provider value={{ joke, category, setCategory, getJoke }}>
      {children}
    </JokeContext.Provider>
  )
}

export function useJoke() {
  const context = useContext(JokeContext);

  if(!context) {
    throw new Error('useAuth must be used within a JokeProvider')
  }

  return context;
}