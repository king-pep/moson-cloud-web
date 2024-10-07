import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute'; // Import the ProtectedRoute component

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Callback from './Callback'; // Import the Callback component

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* Protected routes with layouts */}
            <ProtectedRoute path="/admin" component={Admin} /> {/* Protect this route */}

            {/* Callback route for Keycloak */}
            <Route path="/callback" component={Callback} />

            {/* Public routes with layouts */}
            <Route path="/auth" component={Auth} />

            {/* Public routes without layouts */}
            <Route path="/landing" exact component={Landing} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Landing} />

            {/* Add redirect for first page */}
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
