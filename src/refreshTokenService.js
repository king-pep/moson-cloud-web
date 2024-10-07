import {redirectToLogin} from "./redirectToLogin";

export const refreshAccessToken = async () => {
    const tokenUrl = 'https://alpha.mosontech.co.za/realms/db-manager/protocol/openid-connect/token';
    const clientId = 'docker-db-inst';
    const refreshToken = localStorage.getItem('refresh_token');
    const clientSecret = 'pXFYAnX1I6XUIxxZ5biDqRNalALHEUQl';

    if (isTokenExpired(refreshToken)) {
        console.log('Refresh token expired, redirecting to login');
        return redirectToLogin();
    }

    const data = new URLSearchParams();
    data.append('grant_type', 'refresh_token');
    data.append('client_id', clientId);
    data.append('refresh_token', refreshToken);
    data.append('client_secret', clientSecret);

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
    });

    if (response.ok) {
        const tokens = await response.json();
        localStorage.setItem('access_token', tokens.access_token);
        localStorage.setItem('refresh_token', tokens.refresh_token);
    } else {
        console.error('Error refreshing tokens:', response.statusText);
        redirectToLogin();

    }
};
const isTokenExpired = (token) => {
    if (!token) return true;

    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    const expiryTime = tokenPayload.exp * 1000;
    return Date.now() > expiryTime;
};
