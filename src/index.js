import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Callback from './Callback';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <ProtectedRoute path="/admin" component={Admin} />

            <Route path="/callback" component={Callback} />

            <Route path="/auth" component={Auth} />

            <Route path="/landing" exact component={Landing} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Landing} />

            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
