import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    hotels: [],
    startDate: null,
    endDate: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_HOTELS:
            return {
                ...state,
                hotels: action.payload,
            }
        case actionTypes.LOAD_STAY_RANGE:
            return{
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
            }
        default:
            return state;
    }
}
