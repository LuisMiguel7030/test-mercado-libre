// vendors
import axios from 'axios';
// constants
import { SEARCH_ENDPOINT } from '../../../constants/endpoints';

export const requestSerachProduct = (query: string): Promise<any> => {
  return axios.get(SEARCH_ENDPOINT, {
    params: {
      q: query
    }
  });
};