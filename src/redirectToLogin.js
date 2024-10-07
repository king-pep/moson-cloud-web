export const redirectToLogin = () => {
    const keycloakUrl = 'https://alpha.mosontech.co.za/realms/db-manager/protocol/openid-connect/auth';
    const clientId = 'docker-db-inst';
    const redirectUri = encodeURIComponent('http://localhost:3000/callback'); // Adjust callback URL if needed
    const responseType = 'code';

    // Redirect to Keycloak login page
    window.location.href = `${keycloakUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
};