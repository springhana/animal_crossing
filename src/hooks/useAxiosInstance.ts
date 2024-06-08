import axios from 'axios';

const useAxiosInstance = () => {
  return axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
      'X-API-KEY': process.env.X_API_KEY,
      'Accept-Version': '1.7.0',
    },
  });
};

export default useAxiosInstance;
