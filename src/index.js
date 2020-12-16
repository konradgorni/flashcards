import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root/Root'
import store from './data/store/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


