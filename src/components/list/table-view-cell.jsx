import React from 'react';
import PropTypes from 'prop-types';
import CellHeader from './cell-header';
import CellBody from './cell-body';

const TableViewCell = ({ data }) => (
  <div>
    <CellHeader
      name={data.name}
      age={data.age}
    />
    <CellBody
      description={data.description}
    />
  </div>
);


TableViewCell.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default TableViewCell;
