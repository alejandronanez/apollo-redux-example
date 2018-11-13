import React from 'react';
import { Query } from 'react-apollo';
import query from './graphql/queries';

const CenterPanel = () => (
  <Query query={query}>
    {({ loading, error, data }) => {
      if (loading || !data) {
        return <h1>Loading...</h1>;
      }

      return <h1>{data.person.name}</h1>;
    }}
  </Query>
);

export default CenterPanel;
