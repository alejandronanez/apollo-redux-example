import React from 'react';
import { Query } from 'react-apollo';
import query from '../graphql/queries';
import CentralPanel from './CentralPanel';

const CenterPanel = () => (
  <Query query={query}>
    {({ loading, error, data }) => (
      <CentralPanel loading={loading} data={data} error={error} />
    )}
  </Query>
);

export default CenterPanel;
