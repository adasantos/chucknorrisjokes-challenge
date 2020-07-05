import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Jokes from '../pages/Jokes';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/jokes"  component={Jokes}/>
  </Switch>
)

export default Routes