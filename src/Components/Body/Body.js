import React from 'react';
import Home from './Home/Home';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';
import Auth from './Auth/Auth';
import Room from './Room/Room';

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/room" exact component={Room} />
                <Route path="/login" exact component={Auth} />
                <Route path="/search" exact component={SearchPage} />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    )
}

export default Body;
