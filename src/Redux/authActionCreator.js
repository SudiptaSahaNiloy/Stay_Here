import axios from "axios";
import * as actionTypes from './actionTypes';

export const guestSuccess = (guestId) => {
    return {
        type: actionTypes.GUEST_INFO,
        payload: guestId,
    }
}

export const guest = (firstName, lastName, phoneNumber, email) => dispatch => {
    const guestData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    }

    axios.post('http://localhost:3001/guests', guestData)
        .then(response => {
            localStorage.setItem('guestId', response.data.id);
            dispatch(guestSuccess(response.data.id));
        })
}

// remember me section. Used to stay logged in
export const guestCheck = () => dispatch => {
    const guestId = localStorage.getItem('guestId');
    if (guestId === null) {
        // logout
    } else {
        dispatch(guestSuccess(guestId));
    }
}