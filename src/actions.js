export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';
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
export const updateAge = payload => ({ type: UPDATE_AGE, payload });
