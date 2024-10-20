export const redirectToLogin = () => {
    const keycloakUrl = 'https://alpha.mosontech.co.za/realms/db-manager/protocol/openid-connect/auth';
    const clientId = 'docker-db-inst';
    const redirectUri = encodeURIComponent(process.env.REACT_APP_REDIRECT_URI);
    const responseType = 'code';

    window.location.href = `${keycloakUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
};
