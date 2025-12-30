import api from './apiService';

const subscribeService = {
    subscribeEmail: async ({ email }) => {
        const response = await api.post(`/subscribe/teste?email=${encodeURIComponent(email)}`);
        return response.data;
    }
};

export default subscribeService;