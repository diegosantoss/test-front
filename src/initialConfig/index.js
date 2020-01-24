import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store'
// css
import './index.css';

import RoutesPages from '../pages/';

const InitialConfig = () => (
  <Provider store={store}>
    <Router>
      <RoutesPages />
    </Router>
  </Provider>
);
 
export default InitialConfig;