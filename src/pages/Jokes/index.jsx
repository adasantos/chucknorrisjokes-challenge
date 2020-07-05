import React from 'react';

import { Link } from 'react-router-dom';

const Jokes = () => {
  return (
    <>
      <h1>Hello Jokes</h1>
      <Link to="/">
        <button type="button">Voltar</button>
      </Link>
    </>
  )
}

export default Jokes;