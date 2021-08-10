import axios from "axios";
import * as actionTypes from './actionTypes';

export const loadHotels = (hotels) => {
    return {
        type: actionTypes.LOAD_HOTELS,
        payload: hotels,
    }
}

export const fetchHotels = () => dispatch => {
    axios.get('http://localhost:3001/rooms')
        .then(response => dispatch(loadHotels(response.data)))
}

export const loadStayRange = (startDate, endDate) => {
    console.log("StartDate: ", startDate, "EndDate: ", endDate);
    return{
        type: actionTypes.LOAD_STAY_RANGE,
        payload: {
            startDate: startDate,
            endDate: endDate,
        }
    }
}
