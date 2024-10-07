import React from 'react';
import { redirectToLogin } from './redirectToLogin';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const accessToken = localStorage.getItem('access_token'); // Check if the access token is present

    return (
        <Route
            {...rest}
            render={(props) =>
                accessToken ? (
                    <Component {...props} /> // Render the component if the user is authenticated
                ) : (
                    redirectToLogin() // Redirect to Keycloak login if not authenticated
                )
            }
        />
    );
};

export default ProtectedRoute;
