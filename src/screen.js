import React from 'react';
import Hello from './components/hello';

export default class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Hello />
      </div>);
  }
}
