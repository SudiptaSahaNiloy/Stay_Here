import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
import { connect } from 'react-redux';

const mapStateToProps = (State) => {
    return {
        hotels: State.hotels,
    }
}

function SearchPage(props) {

    let hotel = null;
    hotel = props.hotels.map((item) => {
        return (
            <SearchResult
                key={item.id}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total="$117 total"
            />
        )
    })

    return (
        <div className="searchPage">
            <div className="searchPage_info">
                <p>62 stays . 26 August to 30 August . 2 guest</p>
                <h1>Stays Nearby</h1>
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
                {hotel}
                {/* <SearchResult
                    img="assets/images/alex-bertha-Jyg7xHRmXiU-unsplash.jpg"
                    location="Private room in center of london"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest . 1 bedroom . 1 bed"
                    star="4.73"
                    price="$30/night"
                    total="$117 total"
                />
                <SearchResult
                    img="assets/images/alex-bertha-Jyg7xHRmXiU-unsplash.jpg"
                    location="Private room in center of london"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest . 1 bedroom . 1 bed"
                    star="4.73"
                    price="$30/night"
                    total="$117 total"
                /> */}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(SearchPage);
