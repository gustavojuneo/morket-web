import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';

const Routes = () => {
  return (
    <Router>
      <Route exact component={Home} path="/" />
    </Router>
  );
}

export default Routes;