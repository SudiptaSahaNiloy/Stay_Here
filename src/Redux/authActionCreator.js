import axios from "axios";
import * as actionTypes from './actionTypes';

export const guestSuccess = (guestInfo) => {
    return {
        type: actionTypes.GUEST_INFO,
        payload: guestInfo,
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
        .then(response => dispatch(guestSuccess(response.data)))
}