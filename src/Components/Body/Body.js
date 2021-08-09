import React from 'react';
import Home from './Home/Home';
import { Route, Switch } from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage';

function Body() {
    return (
        <div>
            <Switch>
                <Route path="/search" exact component={SearchPage} />
                <Route path="/" exact component={Home} />
            </Switch>
        </div>
    )
}

export default Body;
