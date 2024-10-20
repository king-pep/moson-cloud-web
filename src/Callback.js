import React, { useEffect } from 'react';
import { exchangeCodeForTokens } from './TokenService'; // Function to exchange code for tokens
import { useHistory } from 'react-router-dom';
import './spinner.css';
import {ClipLoader} from "react-spinners";

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

    return (
        <div className="spinner-container">
            <ClipLoader size={100} color={"#123abc"} loading={true}/>
        </div>
    );
};


export default Callback;
