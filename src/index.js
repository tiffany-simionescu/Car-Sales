import React from 'react';
import ReactDOM from 'react-dom';
import App, { store } from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

// Redux Provider
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, rootElement);
