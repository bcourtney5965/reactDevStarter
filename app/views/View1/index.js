import React, { Component } from 'react';

class View1 extends Component {
  constructor() {
    super()
  }
  testLogger() {
    console.log("hello");
  }
  render() {
    return (
      <div onClick={this.testLogger}> Hello World! </div>
    );
  }
}

export default View1