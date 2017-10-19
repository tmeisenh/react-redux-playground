import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cellStateForId } from './state-helper';

const CellHeader = ({ id, name, age }) => (
  <div>
    Name: {name}, age: {age}
  </div>
);


CellHeader.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  age: PropTypes.string,
};

CellHeader.defaultProps = {
  name: 'N/A',
  age: 'N/A',
};

const propsFromState = (state, ownProps) => ({
  id: ownProps.id,
  age: cellStateForId(state, ownProps.id).age,
  name: cellStateForId(state, ownProps.id).name,
});

const dispatchActionCallbacks = {
};

export default connect(propsFromState, dispatchActionCallbacks)(CellHeader);
