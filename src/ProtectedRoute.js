import React from 'react';
import { Route } from 'react-router-dom';
import { redirectToLogin } from './redirectToLogin';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const accessToken = localStorage.getItem('access_token');

    return (
        <Route
            {...rest}
            render={(props) => {
                if (accessToken) {
                    console.log('Rendering protected component:', Component);
                    return <Component {...props} />;
                } else {
                    console.log('Redirecting to login');
                    localStorage.setItem('nextUrl', props.location.pathname);
                    return redirectToLogin();
                }
            }}
        />
    );
};

export default ProtectedRoute;
