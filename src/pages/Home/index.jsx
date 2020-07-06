import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { useJoke } from '../../hooks/jokes'; 

import api from '../../services/api';

const Home = () => {
  const { setCategory } = useJoke();
  const history = useHistory();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
     const response = await api.get('categories');

     setCategories(response.data);
    }

    getCategories();
  }, [])

  const handleClick = useCallback(async (category) => {
     await setCategory(category);

     history.push('/jokes');
  }, [setCategory, history]);

  return (
    <>
      <h1>Hello Home</h1>
      <ul>
        {categories && 
          categories.map(category => (
            <li key={category} onClick={() => handleClick(category)}>{category}</li>
          ))
        }
      </ul>
    </>
  )
}

export default Home;