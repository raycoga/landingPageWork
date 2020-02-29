import React, { memo } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Imported Components */
import Profile from '../layout_components/profile'
import Home from '../layout_components/home'
const Index = memo(() => {
    return (
        <div className="platform-content-container">
            <Router>
            <Switch>
                <Route exact path="/dashboard/home" component={Home} />
                <Route exact path="/dashboard/profile" component={Profile} />
            </Switch>
        </Router>
        </div>
    );
});

export default Index;