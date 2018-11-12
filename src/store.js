import { createStore } from 'redux';

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

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_AGE = 'UPDATE_AGE';

// Action creators
export const updateFirstName = payload => ({
  type: UPDATE_FIRST_NAME,
  payload,
});
export const updateLastName = payload => ({ type: UPDATE_LAST_NAME, payload });

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
