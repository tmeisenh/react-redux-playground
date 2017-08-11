import { connect } from 'react-redux';
import { requestGreeting } from '../../actions/index';
import Hello from './hello';

const propsFromState = state => ({ greetingText: state.greeting.greetingText });

const dispatchActionCallbacks = {
  getGreetingHandler: requestGreeting,
};

export default connect(propsFromState, dispatchActionCallbacks)(Hello);
