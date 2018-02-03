import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { expect } from 'chai';

import ConnectedComponent from './';
import {
  GREETING_REQUEST,
  GREETING_SENT,
  GREETING_ERROR,
} from '../../actions/';
import configureStore from '../../store/configureStore';

import { api } from '../../services/greeting';

describe('Hello Connected Component', () => {
  let sandbox;
  let store;
  let apiStub;
  let greetingServiceStub;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    apiStub = sandbox.stub(api);
    apiStub.greeting.returns(Promise.resolve('Hello world!'));
    store = configureStore();
  });

  afterEach(() => {
    sandbox.restore();
  });

  function wait(delay = 0) {
    return new Promise(resolve => setTimeout(() => resolve(), delay));
  }

  it('shows loading when screen is loading', () => {
    const testObject = mount(
      <Provider store={store} >
        <ConnectedComponent />
      </Provider>,
    );

    const initialStore = store.getState(GREETING_REQUEST).greeting;
    expect(initialStore).to.eql({ greetingText: 'loading...' });

    const p = testObject.find('p');
    expect(p.length).to.equal(1);
    expect(p.text()).to.eql('loading...');
  });

  it('shows greeting after successfully fetched', () => {
    const testObject = mount(
      <Provider store={store} >
        <ConnectedComponent />
      </Provider>,
    );

    return wait(0).then(() => {
      const state = store.getState(GREETING_SENT).greeting;
      expect(state).to.eql({ greetingText: 'Hello world!' });

      const p = testObject.find('p');
      expect(p.length).to.equal(1);
      expect(p.text()).to.eql('Hello world!');
    });
  });

  it('shows error when greeting fetch fails', () => {
    apiStub.greeting.returns(Promise.reject('oh noes'));

    const testObject = mount(
      <Provider store={store} >
        <ConnectedComponent />
      </Provider>,
    );

    return wait(0).then(() => {
      const state = store.getState(GREETING_ERROR).greeting;
      expect(state).to.eql({ greetingText: 'loading...', error: 'oh noes' });

      const p = testObject.find('p');
      expect(p.length).to.equal(1);
      expect(p.text()).to.eql('oh noes');
    });
  });
});
