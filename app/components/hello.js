'use strict';

import React from 'react';

export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.msg = 'Hello, world!';
  }
  render() {
    return (
      <p>{this.msg}</p>
      );
  }
};
