import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Components */
import Sign from './views/sign'
import Landing from './views/landing'
import Funciontalities from './views/funtionalities'
import Company from './views/company'
import Plans from './views/plans'
import Contact from './views/contact'
export default function PrincipalRouter() {

    return (
        <Router>
            <Switch>
                <Route path="/sign_up" component={Sign} />
                <Route exact path="/sign_in" component={Sign} />
                <Route exact path="/functionalities" component={Funciontalities} />
                <Route exact path="/company" component={Company} />
                <Route exact path="/plans" component={Plans} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/users">
                    <div> user</div>
                </Route>
                <Route path="/" component={Landing} />
            </Switch>
        </Router>
    );
}