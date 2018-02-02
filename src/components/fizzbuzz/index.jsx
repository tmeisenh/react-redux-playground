import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { textFieldUpdated } from '../../actions/fizzbuzz';

const Component = ({
  textValue,
  result,
  textChangeHandler,
}) => (
  <div>
    <h2>Hello fizz buzz.</h2>
    <p>For numbers that are multiples of 3, print Fizz.  For numbers that are multiples of 5 print Buzz.  For numbers that are multiples of 3 and 5 print FizzBuzz</p>
    <input type="text" value={textValue} onChange={event => textChangeHandler(event.target.value)} />
    <h2>result is: {result}</h2>
  </div>
);

Component.propTypes = {
  textValue: PropTypes.string.isRequired,
  textChangeHandler: PropTypes.func.isRequired,
};

const propsFromState = state => ({
  textValue: state.fizzbuzz.textValue,
  result: state.fizzbuzz.result,
});

const dispatchActionCallbacks = {
  textChangeHandler: textFieldUpdated,
};

export default connect(propsFromState, dispatchActionCallbacks)(Component);
