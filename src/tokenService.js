export const exchangeCodeForTokens = async (authorizationCode) => {
    const tokenUrl = 'https://alpha.mosontech.co.za/realms/db-manager/protocol/openid-connect/token';
    const clientId = 'docker-db-inst';
    const redirectUri = 'https://mosoncloud.mosontech.co.za/callback';
    const clientSecret = 'pXFYAnX1I6XUIxxZ5biDqRNalALHEUQl';


    const data = new URLSearchParams();
    data.append('grant_type', 'authorization_code');
    data.append('client_id', clientId);
    data.append('redirect_uri', redirectUri);
    data.append('code', authorizationCode);
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
        const nextUrl = localStorage.getItem('nextUrl') || '/defaultPage';
        localStorage.removeItem('nextUrl');
        window.location.href = nextUrl;
    } else {
        console.error('Error fetching tokens:', response.statusText);
    }
};
