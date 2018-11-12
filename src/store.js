import { createStore } from 'redux';

const initialState = {
  sum: 0,
  data: [],
};

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const FETCH_DATA = 'FETCH_DATA';

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.sum + 1;
    case DECREMENT:
      return state.sum - 1;
    case FETCH_DATA:
      return state;
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
