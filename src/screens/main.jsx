import React from 'react';
import { Link } from 'react-router-dom';

import Hello from '../components/hello';
import TableView from '../components/list';

const MainScreen = () => (
  <div>
    <Hello />
    <ul>
      <li><Link to="/fizzbuzz">Fizzbuzz</Link></li>
      <li><Link to="/listy">A list of things</Link></li>
    </ul>
  </div>
);

export default MainScreen;
