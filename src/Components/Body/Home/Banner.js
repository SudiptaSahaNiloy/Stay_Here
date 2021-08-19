import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Stylesheet/Banner.css';
import SearchDates from './SearchDates.js';

function Banner() {
    const history = useHistory();
    const [showSearch, setshowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner_search">
                <Button
                    onClick={() => setshowSearch(!showSearch)}
                    className="banner_search_button"
                >
                    {showSearch ? "Hide" : "Seach Dates"}
                </Button>
                {showSearch ? <SearchDates /> : null}
            </div>
            <div>
                <div className="banner_info">
                    <h1>Get out and stretch your imagination</h1>
                    <h5>
                        Plan a different kind of gateway to uncover the hidden
                        gems near you
                    </h5>
                    <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Banner;
