import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import { Component } from 'react';
import { booking, fetchBookingList, updateHotels } from '../../../Redux/actionCreators';

const mapStateToProps = (State) => {
    return {
        hotels: State.hotels,
        guestId: State.guestId,
        startDate: State.startDate,
        endDate: State.endDate,
        bookingList: State.bookingList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        booking: (guestId, roomId, bookingStartDate, bookingEndDate) => dispatch(booking(guestId, roomId, bookingStartDate, bookingEndDate)),
        fetchBookingList: () => dispatch(fetchBookingList()),
        updateHotels: (hotelRoom) => dispatch(updateHotels(hotelRoom))
    }
}

class SearchPage extends Component {
    componentDidMount() {
        this.props.fetchBookingList();
    }

    state = {
        selectedRoom: null,
    }

    onHotelSelect = (room) => {
        this.props.booking(this.props.guestId, room.id, this.props.startDate, this.props.endDate);
        let hotelRoom = null;

        hotelRoom = this.props.hotels.filter((item) => {
            return item.id === room.id;
        })

        this.props.updateHotels(hotelRoom);
        this.setState({
            selectedRoom: room,
        })
    }

    render() {
        // this.props.bookingList.map((item) => {
        //     if (item.bookingEndDate < new Date()) {
        //         this.props.updateHotels(item.roomId)
        //     }
        // })

        let hotel = null;
        let unBookedRooms = null;

        unBookedRooms = this.props.hotels.filter((item) => {
            return item.booked === 'false';
        })
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
