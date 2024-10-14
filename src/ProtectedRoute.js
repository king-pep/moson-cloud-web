import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import {redirectToLogin} from './redirectToLogin';
import {refreshAccessToken} from './refreshTokenService';
import {ClipLoader} from 'react-spinners';
import './spinner.css';

const isTokenExpired = (token) => {
    if (!token) return true;
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expiryTime = tokenPayload.exp * 1000;
    return Date.now() > expiryTime;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const refreshToken = localStorage.getItem('refresh_token');

        if (isTokenExpired(accessToken)) {
            console.log('Access token expired, attempting to refresh');

            if (refreshToken && !isTokenExpired(refreshToken)) {
                refreshAccessToken().then((success) => {
                    setIsLoading(false);
                    if (success) {
                        setIsAuthenticated(true);
                    } else {
                        console.log('Refresh token expired, redirecting to login');
                        localStorage.setItem('nextUrl', window.location.pathname);
                        redirectToLogin();
                    }
                });
            } else {
                console.log('Both tokens are expired, redirecting to login');
                localStorage.setItem('nextUrl', window.location.pathname);
                redirectToLogin();
            }
        } else {
            setIsAuthenticated(true);
            setIsLoading(false);
        }
    }, []);

    return (
        <Route
            {...rest}
            render={(props) =>
                isLoading ? (
                    <div className="spinner-container">
                        <ClipLoader size={100} color={"#123abc"} loading={true} />
                    </div>
                ) : isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <div>Loading...</div>
                )
            }
        />
    );
};
export default ProtectedRoute;
