import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import { Component } from 'react';
import { guestInfoUpdate } from '../../../Redux/actionCreators';

const mapStateToProps = (State) => {
    return {
        hotels: State.hotels,
        guests: State.guests,
        startDate: State.startDate,
        endDate: State.endDate,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        guestInfoUpdate: (roomId, bookStartDate, bookEndDate) => dispatch(guestInfoUpdate(roomId, bookStartDate, bookEndDate)),
    }
}

class SearchPage extends Component {
    state = {
        selectedHotel: null,
    }

    onHotelSelect = (hotel) => {
        // console.log(hotel);
        this.props.guestInfoUpdate(hotel.id, this.props.startDate, this.props.endDate);
        this.setState({
            selectedHotel: hotel,
        })
    }

    render() {
        let hotel = null;
        let unBookedRooms = null;
        unBookedRooms = this.props.hotels.filter((item) => {
            let endDate = new Date(item.bookEndDate);
            let startDate = new Date(this.props.startDate);
            return startDate > endDate;
        })
        // console.log(unBookedRooms);
        hotel = unBookedRooms.map((item) => {
            return (
                <SearchResult
                    key={item.id}
                    hotelRoom={item}
                    total="$117 total"
                    onHotelSelect={this.onHotelSelect}
                />
            )
        })

        return (
            <div className="searchPage">
                <div className="searchPage_info">
                    <p>62 stays . 26 August to 30 August . 2 guest</p>
                    <h1>Stays Nearby</h1>
                    {/* top button section */}
                    <Button variant="outlined">
                        Cancellation Flexibility
                    </Button>
                    <Button variant="outlined">
                        Type of place
                    </Button>
                    <Button variant="outlined">
                        Price
                    </Button>
                    <Button variant="outlined">
                        Rooms and beds
                    </Button>
                    <Button variant="outlined">
                        More filters
                    </Button>

                    {/* hotel rooms section */}
                    {hotel}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
