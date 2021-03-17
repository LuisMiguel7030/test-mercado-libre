import axios from 'axios';

export const requestSerachProduct = (query: string): Promise<any> => {
  return axios.get(`/api/search?q=${query}`);
};