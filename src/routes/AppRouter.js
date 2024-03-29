import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Execute from '../components/code/Execute';

export default function AppRouter() {
  return (
    <div className='mt-10'>
      <Switch>
        <Route exact path="/exec" component={Execute} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
