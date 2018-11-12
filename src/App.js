import React, { Component, Fragment } from 'react';
import './App.css';
import CenterPanel from './CenterPanel';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="Container">
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </div>
        <Counter />
        <div className="Controls">
          <button className="Button" onClick={this.handleSumClick}>
            +
          </button>
          <button className="Button" onClick={this.handleSubtractClick}>
            -
          </button>
          <button className="Button" onClick={this.handleGetDataThunkClick}>
            Get data from source using Thunks
          </button>
          <button className="Button" onClick={this.handleGetDataApolloClick}>
            Get data from source using Apollo
          </button>
        </div>
      </Fragment>
    );
  }
}

export default App;
