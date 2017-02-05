import React, { Component } from 'react';
import Router from 'react-router';
import { render } from 'react-dom';
import { DefaultRoute, Link,  Route, RouteHandler } from 'react-router';

class App extends Component {
  render() {
    return (
      <div> Hello World! </div>
    );
  }
}

render(<App />, document.getElementById('app'));