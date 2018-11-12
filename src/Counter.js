import React from 'react';
import { connect } from 'react-redux';

const Counter = props => <div className="Counter">Counter {props.counter}</div>;

const mapStateToProps = state => ({
  counter: state.counter,
});

export default connect(
  mapStateToProps,
  null
)(Counter);
