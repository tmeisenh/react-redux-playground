import React from 'react';
import PropTypes from 'prop-types';

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getGreetingHandler();
  }

  render() {
    const hello = () => (
      <div>
        <p>{ this.props.greetingText }</p>
      </div>
    );
    return hello();
  }
}

Hello.propTypes = {
  greetingText: PropTypes.string.isRequired,
  getGreetingHandler: PropTypes.func.isRequired,
};

export default Hello;
