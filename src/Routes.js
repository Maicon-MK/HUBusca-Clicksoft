import React from 'react';
import {
    BrowserRouter as BRouter,
    Switch,
    Route
} from 'react-router-dom';


import Home from './pages/home';
import Repos from './pages/repos';
import Btn from './pages/repos'

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Repos } />
            <Route path="/repos" component={ Btn } />
        </Switch>
    </BRouter>
);

export default Routes;