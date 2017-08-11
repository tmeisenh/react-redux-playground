import React from 'react';
import PropTypes from 'prop-types';

const Hello = (
  greetingText,
  getGreetingHandler,
) => (
  <div>
    <p>hello</p>
  </div>
);

Hello.propTypes = {
  greetingText: PropTypes.string,
  getGreetingHandler: PropTypes.func.isRequired
};

Hello.defaultPropTypes = {
  greetingText: ''
};

export default Hello;
