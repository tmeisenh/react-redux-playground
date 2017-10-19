import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cellStateForId } from './state-helper';

const CellBody = ({ id, description }) => (
  <div>
    Description: {description}
  </div>
);


CellBody.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
};

CellBody.defaultProps = {
  description: '',
};

const propsFromState = (state, ownProps) => ({
  id: ownProps.id,
  description: cellStateForId(state, ownProps.id).description,
});

const dispatchActionCallbacks = {
};

export default connect(propsFromState, dispatchActionCallbacks)(CellBody);
