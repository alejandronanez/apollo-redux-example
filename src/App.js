import React, { Component, Fragment } from 'react';
import './App.css';
import CenterPanel from './CenterPanel';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';
import Counter from './Counter';
import Controls from './Controls';
import Names from './Names';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="Container">
          <LeftPanel />
          <CenterPanel />
          <RightPanel />
        </div>
        <Names />
        <Counter />
        <Controls />
      </Fragment>
    );
  }
}

export default App;
