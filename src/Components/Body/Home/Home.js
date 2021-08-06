// type 'rfce' and see the magic
import React from 'react';
import './Home.css';
import Banner from './Banner';
import { Button } from '@material-ui/core';

function Home() {
    return (
        <div className="home">
            <Banner />
        </div>
    )
}

export default Home;
