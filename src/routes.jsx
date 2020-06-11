import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';
import NewProduct from './pages/NewProduct';

const Routes = () => {
  return (
    <Router>
      <Route exact component={Home} path="/" />
      <Route component={Products} path="/products" />
      <Route component={NewProduct} path="/new-product" />
    </Router>
  );
}

export default Routes;