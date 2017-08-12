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
    const error = () => (
      <div>
        <p>{ this.props.error }</p>
      </div>
    );

    return this.props.error !== Hello.defaultProps.error ? error() : hello();
  }
}

Hello.propTypes = {
  getGreetingHandler: PropTypes.func.isRequired,
  greetingText: PropTypes.string,
  error: PropTypes.string,
};

Hello.defaultProps = {
  greetingText: '',
  error: '',
};

export default Hello;
