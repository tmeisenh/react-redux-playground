import React from 'react';
import PropTypes from 'prop-types';

const EmptyTableViewCell = ({ text }) => (
  <div>
    {text}
  </div>
);

EmptyTableViewCell.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EmptyTableViewCell;
