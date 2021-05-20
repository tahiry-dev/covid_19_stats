import { ActionTypes } from '../constants/action-types';

const initialState = {
  stats: [],
};

export const wordStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_WORLD_STATS:
      return { ...state, stats: payload };
    default:
      return state;
  }
};

export const selectedCountryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_COUNTRY_STATS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_STATS:
      return {};
    default:
      return state;
  }
};
