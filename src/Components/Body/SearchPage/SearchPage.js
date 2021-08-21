import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';
import { Component } from 'react';
import {fetchBookingList} from '../../../Redux/actionCreators';

const mapStateToProps = (State) => {
    return {
        hotels: State.hotels,
        bookingList: State.bookingList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBookingList: () => dispatch(fetchBookingList()),
    }
}

class SearchPage extends Component {
    componentDidMount() {
        this.props.fetchBookingList();
    }

    render() {
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
