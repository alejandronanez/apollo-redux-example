import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getPersonaFirstName, getPersonaLastName } from '../selectors';

const CenterPanel = props => {
  console.log(props);
  return (
    <div>
      <strong>Data from Redux:</strong>
      <ul>
        <li>{props.firstName}</li>
        <li>{props.lastName}</li>
      </ul>
      <hr />
      {props.loading && <strong>Loading...</strong>}
      {!props.loading && (
        <Fragment>
          <strong>Data from GraphQL</strong>
          <ul>
            <li>{props.data.person.name}</li>
          </ul>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  loading: ownProps.loading,
  data: ownProps.data,
  error: ownProps.error,
  firstName: getPersonaFirstName(state),
  lastName: getPersonaLastName(state),
});

export default connect(
  mapStateToProps,
  null
)(CenterPanel);
