import { combineReducers } from 'redux';
import { wordStatsReducer, selectedCountryReducer } from './statsReducer';

const reducers = combineReducers({
  wordStats: wordStatsReducer,
  countryStats: selectedCountryReducer,
});
export default reducers;
