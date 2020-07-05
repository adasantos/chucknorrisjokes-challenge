import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
     const response = await api.get('categories');

     setCategories(response.data);
    }

    getCategories();
  }, [])

  return (
    <>
      <h1>Hello Home</h1>
      <ul>
        {categories && 
          categories.map(category => (
            <li key={category}>{category}</li>
          ))
        }
      </ul>
      <Link to="/jokes">
        <button type="button">Jokes</button>
      </Link>
    </>
  )
}

export default Home;