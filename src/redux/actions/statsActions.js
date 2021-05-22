import {
  SET_WORLD_STATS, SELECT_COUNTRY_STATS, REMOVE_SELECTED_COUNTRY, FILTER_CONTINENT,
} from '../constants/action-types';

export const setWorldStats = (stats) => ({
  type: SET_WORLD_STATS,
  payload: stats,
});

export const selectCountryStats = (countryStats) => ({
  type: SELECT_COUNTRY_STATS,
  payload: countryStats,
});

export const removeSelectedCountry = () => ({
  type: REMOVE_SELECTED_COUNTRY,
});

export const filterContinent = (continent) => ({
  type: FILTER_CONTINENT,
  payload: continent,
});
