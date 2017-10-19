import { connect } from 'react-redux';
import { requestGreeting } from '../../actions/index';
import TableView from './tableview';

const propsFromState = state => ({
  data: state.listy.data,
});

const dispatchActionCallbacks = {
};

export default connect(propsFromState, dispatchActionCallbacks)(TableView);
