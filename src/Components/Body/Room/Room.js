import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { booking, updateHotels } from '../../../Redux/actionCreators';
import './Room.css';

const mapStateToProps = (State) => {
    return {
        guestId: State.guestId,
        startDate: State.startDate,
        endDate: State.endDate,
        room: State.selectedRoom,
        hotels: State.hotels,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        booking: (guestId, roomId, bookingStartDate, bookingEndDate) => dispatch(booking(guestId, roomId, bookingStartDate, bookingEndDate)),
        updateHotels: (hotelRoom) => dispatch(updateHotels(hotelRoom)),
    }
}

class Room extends Component {
    onHotelSelect = () => {
        this.props.booking(this.props.guestId, this.props.room.id, this.props.startDate, this.props.endDate);
        let hotelRoom = null;

        hotelRoom = this.props.hotels.filter((item) => {
            return item.id === this.props.room.id;
        })

        this.props.updateHotels(hotelRoom);
    }

    render() { 
        return (
            <div>
                <div className="row">
                    <div className="col-6 border image-section">
                        <img src={this.props.room.img} alt="" />
                    </div>
                    <div className="col-6 border info-section">
                        <h1>{this.props.room.title}</h1>
                        <p>{this.props.room.description}</p>
                        <p>Rating: {this.props.room.star}</p>
                        <Button onClick={() => this.onHotelSelect()}>Confirm</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)
