import React from 'react';
import PropTypes from 'prop-types';
import fp from 'lodash/fp';

import EmptyTableViewCell from './empty-table-view-cell';
import TableViewCell from './table-view-cell';

const buildTable = data => (
  <div>
    {
      data.map(x => (<TableViewCell key={x.key} data={x} />))
    }
  </div>
);

const TableView = ({
  data,
}) => (fp.isEmpty(data) ? <EmptyTableViewCell text={'No Data found.'} /> : buildTable(data));

TableView.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
};


export default TableView;
