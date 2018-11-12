import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, FETCH_DATA } from './actions';

const Controls = props => {
  console.log('Props: ', props);
  return (
    <div className="Controls">
      <button className="Button" onClick={props.increment}>
        +
      </button>
      <button className="Button" onClick={props.decrement}>
        -
      </button>
      <button className="Button" onClick={props.fetchData}>
        Get data from source using Thunks
      </button>
      <button className="Button" onClick={() => {}}>
        Get data from source using Apollo
      </button>
    </div>
  );
};

// Redux
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: INCREMENT }),
  decrement: () => dispatch({ type: DECREMENT }),
  fetchData: () => dispatch({ type: FETCH_DATA }),
});

export default connect(
  null,
  mapDispatchToProps
)(Controls);
