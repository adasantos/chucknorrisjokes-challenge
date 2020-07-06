import React from 'react';

import { JokeProvider } from './jokes';

const AppProvider = ({ children }) => (
  <JokeProvider >
    {children}
  </JokeProvider>
)

export default AppProvider;