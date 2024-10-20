import apiClient from "../api/ApiClient";


const userService = {
    fetchUserInfo: async () => {
        try {
            const response = await apiClient.get('https://alpha.mosontech.co.za/realms/db-manager/protocol/openid-connect/userinfo');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default userService;
