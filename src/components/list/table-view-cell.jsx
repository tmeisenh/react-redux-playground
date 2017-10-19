import React from 'react';
import PropTypes from 'prop-types';
import CellHeader from './cell-header';
import CellBody from './cell-body';

const TableViewCell = ({ id }) => (
  <div>
    <CellHeader
      id={id}
    />
    <CellBody
      id={id}
    />
  </div>
);


TableViewCell.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TableViewCell;
