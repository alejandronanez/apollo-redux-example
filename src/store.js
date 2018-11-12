import { createStore } from 'redux';
import {
  INCREMENT,
  DECREMENT,
  FETCH_DATA,
  UPDATE_FIRST_NAME,
  UPDATE_AGE,
  UPDATE_LAST_NAME,
} from './actions';

const initialState = {
  counter: 0,
  persona: {
    data: {
      name: {
        firstName: '',
        lastName: '',
      },
      age: 0,
    },
  },
  data: [],
};

// Reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case UPDATE_FIRST_NAME:
      return {
        ...state,
        persona: {
          ...state.persona,
          data: {
            ...state.persona.data,
            name: {
              ...state.persona.data.name,
              firstName: action.payload,
            },
          },
        },
      };
    case UPDATE_LAST_NAME:
      return {
        ...state,
        persona: {
          ...state.persona,
          data: {
            ...state.persona.data,
            name: {
              ...state.persona.data.name,
              lastName: action.payload,
            },
          },
        },
      };
    case UPDATE_AGE:
      return {
        ...state,
        persona: {
          ...state.persona,
          data: {
            ...state.persona.data,
            age: action.payload,
          },
        },
      };
    case FETCH_DATA:
      console.log(`${FETCH_DATA}: Fetching data...`);
      return state;
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
