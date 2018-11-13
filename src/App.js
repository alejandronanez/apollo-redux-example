import React, { Component, Fragment } from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import './App.css';
import CenterPanel from './CenterPanel/index';
import LeftPanel from './LeftPanel/index';
import RightPanel from './RightPanel';
import Counter from './Counter';
import Controls from './Controls';
import Names from './Names';

const link = new RestLink({ uri: 'https://swapi.co/api' });
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    );
  }
}

export default App;
