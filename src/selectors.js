import get from 'lodash.get';
import { createSelector } from 'reselect';

// Non Memoized selectors
export const getFirstNameNM = state =>
  get(state, ['persona', 'data', 'name', 'firstName']);

export const getLastNameNM = state =>
  get(state, ['persona', 'data', 'name', 'lastName']);

// Memoized selectors
export const getPersona = state => get(state, ['persona']);
export const getPersonaData = createSelector(
  getPersona,
  persona => persona.data
);
export const getPersonaName = createSelector(
  getPersonaData,
  personaData => personaData.name
);
export const getPersonaFirstName = createSelector(
  getPersonaName,
  personaName => personaName.firstName
);
export const getPersonaLastName = createSelector(
  getPersonaName,
  personaName => personaName.lastName
);
