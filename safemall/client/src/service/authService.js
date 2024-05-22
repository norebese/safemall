import axios from 'axios';

const API_URL = 'http://localhost:8080/auth';

export const createAccount = (data) => {
    return axios.post(`${API_URL}/signup`, data);
  };

