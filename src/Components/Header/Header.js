import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
    return (
        <div className="header">
            <img
                className="header_icon"
                src="assets/images/Airbnb_Logo_Bélo.svg" alt="" />

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
