import apiClient from "../api/ApiClient";


const databaseService = {
    fetchDatabases: async () => {
        try {
            const response = await apiClient.get('/infra/databases/list');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    stopDatabase: async (containerName) => {
        try {
            const response = await apiClient.post('/infra/containers/stop', {
                container_name: containerName,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    restartDatabase: async (containerName) => {
        try {
            const response = await apiClient.post('/infra/containers/start', {
                container_name: containerName,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    deleteDatabase: async (containerName) => {
        try {
            const response = await apiClient.post('/infra/containers/delete', {
                container_name: containerName,
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    createDatabase: async (newDatabase) => {
        try {
            const response = await apiClient.post('/infra/containers/create', newDatabase);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default databaseService;
