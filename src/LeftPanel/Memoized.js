import React from 'react';
import { connect } from 'react-redux';
import { getPersonaFirstName, getPersonaLastName } from '../selectors';

const NonMemoized = props => {
  console.log('Rendering LeftPanel/NonMemoized...');

  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
};

const mapStateToProps = state => ({
  firstName: getPersonaFirstName(state),
  lastName: getPersonaLastName(state),
});

export default connect(
  mapStateToProps,
  null
)(NonMemoized);
