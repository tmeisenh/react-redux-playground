import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect }from 'chai'; 

import ConnectedComponent from './';
import { ActionTypes } from '../../actions/action-types';
import configureStore from '../../store/configureStore';

describe('Hello Connected Component', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });

  it('shows loading when screen is loading', () => {
    const testObject = mount(
      <Provider store={store} >
        <ConnectedComponent />
      </Provider>,
    );

    const initialStore = store.getState(ActionTypes.GREETING_REQUEST).greeting;
    expect(initialStore).to.eql({greetingText: 'loading...'});

    const p = testObject.find('p');
    expect(p.length).to.equal(1);
    expect(p.text()).to.eql('loading...');
  });

  function wait(delay) {
    return new Promise(resolve => setTimeout(() => resolve(), delay));
  }

  it('shows greeting after successfully fetched', () => {
    const testObject = mount(
      <Provider store={store} >
        <ConnectedComponent />
      </Provider>,
    );

    return wait(1000).then(() => {
      const state = store.getState(ActionTypes.GREETING_SENT).greeting;
      expect(state).to.eql({greetingText: 'Hello world!'});

      const p = testObject.find('p');
      expect(p.length).to.equal(1);
      expect(p.text()).to.eql('Hello world!');
    });

  });

  it('shows error when greeting fetch fails');
});
