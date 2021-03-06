import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
    hotels: [],
    guests: [],
    bookingList: [],
    startDate: null,
    endDate: null,
    guestId: null,
    selectedRoom: null,
}

export const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOAD_HOTELS:
            return {
                ...state,
                hotels: action.payload,
            }
        case actionTypes.LOAD_GUESTS:
            return {
                ...state,
                guests: action.payload,
            }
        case actionTypes.LOAD_STAY_RANGE:
            return {
                ...state,
                startDate: action.payload.startDate,
                endDate: action.payload.endDate,
            }
        case actionTypes.GUEST_INFO:
            return {
                ...state,
                guestId: action.payload,
            }
        case actionTypes.BOOKING_INFO:
            return {
                ...state,
                guestId: action.payload,
            }
        case actionTypes.SELECTED_ROOM:
            return {
                ...state,
                selectedRoom: action.payload,
            }
        case actionTypes.BOOKING_LIST:
            return {
                ...state,
                bookingList: action.payload,
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                // idToken: action.payload.idToken,
                // localId: action.payload.localId,
            }
        case actionTypes.AUTH_FAILED:
            return {
                ...state,
                // errorMsg: action.payload,
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                // idToken: null,
                // localId: null,
                // displayName: null,
            }
        default:
            return state;
    }
}
