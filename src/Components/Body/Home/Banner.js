import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Banner.css';
import Search from './Seach.js';

function Banner() {
    const [showSearch, setshowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner_search">
                <Button
                    onClick={() => setshowSearch(!showSearch)}
                    className="banner_search_button"
                    variant="outlined">
                    {showSearch ? "Hide" : "Seach Dates"}
                </Button>
                {showSearch ? <Search /> : null}
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of gateway to uncover the hidden
                    gems near you
                </h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;
