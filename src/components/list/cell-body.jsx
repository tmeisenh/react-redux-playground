import React from 'react';
import PropTypes from 'prop-types';

const CellBody = ({ description }) => (
  <div>
    Description: {description}
  </div>
);


CellBody.propTypes = {
  description: PropTypes.string,
};

CellBody.defaultProps = {
  description: '',
};

export default CellBody;
