// type 'rfce' and see the magic
import React from 'react';
import './Stylesheet/Home.css';
import Banner from './Banner';
import HotelCard from './HotelCard';
import { fetchHotels } from '../../../Redux/actionCreators';
import { connect } from 'react-redux';
import { Component } from 'react';

const mapStateToProps = (State) => {
    return {
        hotels: State.hotels,
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchHotels: () => dispatch(fetchHotels()),
    })
}

class Home extends Component {
    componentDidMount() {
        this.props.fetchHotels();
    }

    render() {
        // console.log(this.props.hotels);

        let hotel = null;
        hotel = this.props.hotels.map((item) => {
            return (
                <HotelCard  
                    key={item.id}
                    src={item.img}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                />
            )
        })


        return (
            <div className="home">
                <Banner />

                <div className="service_section">
                    <HotelCard
                        src="https://images.unsplash.com/photo-1628267374795-cce89ff4b8d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1283&q=80"
                        title="Online Experience"
                        description="Unique activities we can do together
                    led by a world of hosts."
                    />
                    <HotelCard
                        src="https://images.unsplash.com/photo-1627755430008-ca599d57c0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        title="Unique stays"
                        description="Spaces that are a more than a place to sleep"
                    />
                    <HotelCard
                        src="https://images.unsplash.com/photo-1627842468152-62f95538037a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        title="Online Experience"
                        description="Comfortable private places, with room for friends 
                    or family."
                    />
                </div>

                <div className="hotel_section">
                    {hotel}
                </div>


            </div>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
