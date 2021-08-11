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

export const loadGuests = (guests) => {
    return {
        type: actionTypes.LOAD_GUESTS,
        payload: guests,
    }
}

export const fetchGuests = () => dispatch => {
    axios.get('http://localhost:3001/guests')
        // .then(response => console.log(response.data))
        .then(response => dispatch(loadGuests(response.data)))
}

export const guestInfoUpdate = (roomId, bookStartDate, bookEndDate) => {
    const guestInfo = {
        guestId: "4",
        roomId: roomId,
        guestName: "guestName4",
        location: "location4",
        bookStartDate: bookStartDate,
        bookEndDate: bookEndDate,
    }

    // console.log(guestInfo);

    axios.post("http://localhost:3001/guests", guestInfo)
        // .then(response => console.log(response.data))

    return {
        type: actionTypes.GUEST_INFO,
    }
}

export const loadStayRange = (startDate, endDate) => {
    return {
        type: actionTypes.LOAD_STAY_RANGE,
        payload: {
            startDate: startDate,
            endDate: endDate,
        }
    }
}
