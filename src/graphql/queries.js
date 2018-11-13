import gql from 'graphql-tag';

const query = gql`
  query luke {
    person @rest(type: "Person", path: "/people/1/") {
      name
    }
  }
`;

export default query;
