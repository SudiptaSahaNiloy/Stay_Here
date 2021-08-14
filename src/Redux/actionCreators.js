import axios from "axios";
import * as actionTypes from './actionTypes';

export const updateHotels = (hotelRoom) => dispatch => {
    const room = {
        ...hotelRoom[0],
        booked: "true",
    }
    axios.put('http://localhost:3001/rooms/' + hotelRoom[0].id, room)
}

export const loadHotels = (hotels) => {
    // console.log(hotels);
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
        .then(response => dispatch(loadGuests(response.data)))
}

export const loadBooking = (bookingList) => {
    return {
        type: actionTypes.BOOKING_LIST,
        payload: bookingList,
    }
}

export const fetchBookingList = () => dispatch => {
    axios.get('http://localhost:3001/bookingList')
        // .then(response => console.log(response.data))
        .then(response => dispatch(loadBooking(response.data)))
}

export const booking = (guestId, roomId, bookingStartDate, bookingEndDate) => dispatch => {
    const bookingData = {
        guestId: guestId,
        roomId: roomId,
        bookingStartDate: bookingStartDate,
        bookingEndDate: bookingEndDate,
    }

    axios.post("http://localhost:3001/bookingList", bookingData)
    // .then(response => dispatch(loadBooking(response.data)))
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
