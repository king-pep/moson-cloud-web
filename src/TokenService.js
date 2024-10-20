export const exchangeCodeForTokens = async (authorizationCode) => {
    const tokenUrl = 'https://alpha.mosontech.co.za/realms/db-manager/protocol/openid-connect/token';
    const clientId = 'docker-db-inst';
   // const redirectUri = 'https://mosoncloud.mosontech.co.za/callback';
    const redirectUri = 'https://mosoncloud.co.za/callback';
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


export const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    const keycloakServer = 'https://alpha.mosontech.co.za';
    const realmName = 'db-manager';
    const clientId = 'docker-db-inst';

    const postLogoutRedirectUri = encodeURIComponent(window.location.origin);

    const logoutUrl = `${keycloakServer}/realms/${realmName}/protocol/openid-connect/logout?post_logout_redirect_uri=${postLogoutRedirectUri}&client_id=${clientId}`;

    console.log("Logout URL:", logoutUrl);
    window.location.href = logoutUrl;
};
