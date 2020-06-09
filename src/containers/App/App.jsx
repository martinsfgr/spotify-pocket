import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../../routes';

import store from '../../redux/store'

import './App.scss';

const App = () => (
  <div className="app" data-testid="app">
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </div>
);

export default App;
