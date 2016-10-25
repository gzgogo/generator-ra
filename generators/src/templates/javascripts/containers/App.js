import React from 'react';

import HelloReact from '../components/hello-react/HelloReact'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <HelloReact />
      </div>
    );
  }
}

module.exports = App;
