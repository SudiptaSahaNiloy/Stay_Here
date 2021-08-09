import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';

function SearchPage() {
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
                <SearchResult
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
                />
            </div>
        </div>
    )
}

export default SearchPage;
