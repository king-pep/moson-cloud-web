import apiClient from "../api/ApiClient";

const userService = {
    fetchUserInfo: async () => {
        try {
            const response = await apiClient.get('/infra/user/userinfo');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default userService;
