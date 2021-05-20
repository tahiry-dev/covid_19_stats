import { SET_WORLD_STATS, SELECT_COUNTRY_STATS, REMOVE_SELECTED_COUNTRY } from '../constants/action-types';

const initialState = {
  stats: [],
};

export const wordStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_WORLD_STATS:
      return { ...state, stats: payload };
    default:
      return state;
  }
};

export const selectedCountryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECT_COUNTRY_STATS:
      return { ...state, ...payload };
    case REMOVE_SELECTED_COUNTRY:
      return {};
    default:
      return state;
  }
};
