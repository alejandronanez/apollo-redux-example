import React, { Component, Fragment } from 'react';
import './App.css';
import CenterPanel from 'CenterPanel';
import LeftPanel from 'LeftPanel';
import RightPanel from 'RightPanel';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="Container">
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </div>
        <div className="Controls">
          <button className="Button" onClick={this.handleSumClick}>
            +
          </button>
          <button className="Button" onClick={this.handleSubtractClick}>
            -
          </button>
          <button className="Button" onClick={this.handleGetDataClick}>
            Get data from source
          </button>
        </div>
      </Fragment>
    );
  }
}

export default App;
