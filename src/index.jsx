import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import Root from './root';

const renderApplication = () => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <Root />
    </Provider>,
    document.getElementById('root'));
};

renderApplication();
