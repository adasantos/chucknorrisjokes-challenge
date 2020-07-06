import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import {JokeProvider} from './hooks/jokes';
import Routes from './routes'

function App() {
  return (
  <BrowserRouter>
    <JokeProvider>
      <Routes />
    </JokeProvider>
  </BrowserRouter>
  );
}

export default App;
