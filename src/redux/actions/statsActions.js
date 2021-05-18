import { ActionTypes } from '../constants/action-types';

export const setWorldStats = (stats) => {
    return {
        type: ActionTypes.SET_WORLD_STATS,
        payload: stats,
    };
};

export const selectCountryStats = (countryStats) => {
    return {
        type: ActionTypes.SELECT_COUNTRY_STATS,
        payload: countryStats,
    };
};
export const removeSelectedCountry = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_COUNTRY,
    };
};