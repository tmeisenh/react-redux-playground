import React from 'react';
import PropTypes from 'prop-types';

const CellHeader = ({ name, age }) => (
  <div>
    Name: {name}, age: {age}
  </div>
);


CellHeader.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
};

CellHeader.defaultProps = {
  name: 'N/A',
  age: 'N/A',
};

export default CellHeader;
