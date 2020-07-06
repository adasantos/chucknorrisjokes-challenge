import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useJoke } from '../../hooks/jokes'; 

const Jokes = () => {
  const { getJoke, joke, category } = useJoke();

  const handleClick = useCallback(async () => {
    await getJoke(category);
  }, [category, getJoke]);

console.log(joke)
  return (
    <>
      <h1>Hello Jokes</h1>
      {joke && (
        <span>{joke.value}</span>
      )}
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
      <button type="button" onClick={handleClick}>New Joke</button>
    </>
  )
}

export default Jokes;