import { combineReducers } from 'redux';
import { wordStatsReducer, selectedCountryReducer, filterContinentReducer } from './statsReducer';

const reducers = combineReducers({
  wordStats: wordStatsReducer,
  countryStats: selectedCountryReducer,
  filteredContinent: filterContinentReducer,
});
export default reducers;
