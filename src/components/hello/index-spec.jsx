import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ConnectedComponent from './';
import configureStore from '../../store/configureStore';

describe('Hello Connected Component', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it('shows loading when screen is loaded', () => {
    const testObject = mount(
      <Provider store={store} >
        <ConnectedComponent />
      </Provider>,
    );
  });
  it('shows greeting after successfully fetched');
  it('shows error when greeting fetch fails');
});
