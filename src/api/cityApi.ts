import axiosClient from './axiosClient';

const baseUrl = '/cities';
const cityApi = {
  getAll: async () => {
    return axiosClient.get(baseUrl);
  },
};

export default cityApi;
