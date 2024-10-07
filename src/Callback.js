import React, { useEffect } from 'react';
import { exchangeCodeForTokens } from './tokenService'; // Function to exchange code for tokens
import { useHistory } from 'react-router-dom';

const Callback = () => {
    const history = useHistory();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');

        if (authorizationCode) {
            exchangeCodeForTokens(authorizationCode).then(() => {
                // Retrieve the target URL from local storage
                const targetUrl = localStorage.getItem('target_url') || '/';

                // Redirect to the target URL
                history.push(targetUrl);

                // Clear the target URL from local storage
                localStorage.removeItem('target_url');
            });
        }
    }, [history]);

    return <div>Logging in...</div>;
};

export default Callback;
