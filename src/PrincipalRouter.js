import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Components */
/* LANDING */
import Landing from './views/landing'
import Funciontalities from './views/landing/funtionalities'
import Plans from './views/landing/plans'
import Contact from './views/landing/contact'
import Solutions from './views/landing/solutions'
import Company from './views/landing/company'
/* AUTH */
import Sign from './views/sign'
/*AUXILIAR AUTH */
import VerifyEmail from './general_components/EmailsViewsComponents/verifyEmail'
import VerifyNewPassword from './general_components/EmailsViewsComponents/verifyNewPassword'
import EmailSend from './general_components/EmailsViewsComponents/sendEmailView'
import ActivateAccountEmailSend from './general_components/EmailsViewsComponents/ActivateAccountEmailSend'
/* PLATFORM CONTENT LAYOUT */
import Layout from './views/platform_content_layout'

export default function PrincipalRouter() {

    return (
        <Router>
            <Switch>
                {/* Landing */}
                <Route exact path="/functionalities" component={Funciontalities} />
                <Route exact path="/plans" component={Plans} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/company" component={Company} />
                {/* AUTH */}
                <Route path="/sign_up" component={Sign} />
                <Route exact path="/sign_in" component={Sign} />
                <Route path="/change_password" component={Sign} />
                {/* Auxiliar AUTH */}
                <Route exact path="/activate_account_email_send" component={ActivateAccountEmailSend} />
                <Route exact path="/email_send" component={EmailSend} />
                <Route exact path="/verify_email/:token" component={VerifyEmail} />
                <Route exact path="/verify_new_password/:token" component={VerifyNewPassword} />
                {/* Platform content layout */}
                <Route path="/dashboard/" component={Layout} />


                <Route path="/" component={Landing} />
            </Switch>
        </Router>
    );
}