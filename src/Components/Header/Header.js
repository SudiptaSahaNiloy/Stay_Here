import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import { Link } from 'react-router-dom';
// import AuthPopup from './AuthPopup';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_icon"
                    src="assets/images/Airbnb_Logo_Bélo.svg" alt="" />
            </Link>

            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <div>
                    <LanguageIcon />
                    <ExpandMoreIcon />
                </div>
                <Link to="/login">
                    <Avatar />
                </Link>
            </div>
        </div>
    )
}

export default Header
