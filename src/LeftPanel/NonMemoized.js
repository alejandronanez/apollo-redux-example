import React from 'react';
import { connect } from 'react-redux';
import { getFirstNameNM, getLastNameNM } from '../selectors';

const NonMemoized = props => {
  console.log('Rendering LeftPanel/NonMemoized...');

  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
};

const mapStateToProps = state => ({
  firstName: getFirstNameNM(state),
  lastName: getLastNameNM(state),
});

export default connect(
  mapStateToProps,
  null
)(NonMemoized);
