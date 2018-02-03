import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';

import FizzbuzzComponent from './';
import {TEXTFIELDUPDATED} from '../../actions/fizzbuzz';
import configureStore from '../../store/configureStore';

describe('Fizzbuzz Connected Component', () => {
  let store;
  let testObject;

  beforeEach(() => {
    store = configureStore();
    testObject = mount(
      <Provider store={store} >
        <FizzbuzzComponent />
      </Provider>,
    );
  });


  it('result is empty on initial page load', () => {
    const result = testObject.find('#result').text();
    expect(result).to.eql('-');
  });

  it('result is empty when input value is negative', () => {
    const input = testObject.find('input');
    input.simulate('change', { target: { value: '-3' } });

    const result = testObject.find('#result').text();
    expect(result).to.eql('');
  });

  describe('Fizzing when input is divisible by 3', () => {

    it('result is Fizz when input value is 3', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '3' } });

      expect(testObject.find('#result').text()).to.eql('Fizz');
    });

    it('result is Fizz when input value is 9', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '9' } });

      expect(testObject.find('#result').text()).to.eql('Fizz');
    });

    it('result is Fizz when input value is 333', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '333' } });

      expect(testObject.find('#result').text()).to.eql('Fizz');
    });
  });

  describe('Buzzing when input is divisible by 5', () => {

    it('result is Buzz when input value is 5', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '5' } });

      expect(testObject.find('#result').text()).to.eql('Buzz');
    });

    it('result is Buzz when input value is 10', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '10' } });

      expect(testObject.find('#result').text()).to.eql('Buzz');
    });

    it('result is Buzz when input value is 550', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '550' } });

      expect(testObject.find('#result').text()).to.eql('Buzz');
    });
  });

  describe('FizzBuzzing when input is divisible by 3 and 5', () => {

    it('result is FizzBuzz when input value is 15', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '15' } });

      expect(testObject.find('#result').text()).to.eql('FizzBuzz');
    });

    it('result is FizzBuzz when input value is 555', () => {
      const input = testObject.find('input');

      input.simulate('change', { target: { value: '555' } });

      expect(testObject.find('#result').text()).to.eql('FizzBuzz');
    });
  });

});
