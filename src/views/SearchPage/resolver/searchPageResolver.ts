// vendors
import axios from 'axios';
// constants
import { SEARCH_ENDPOINT } from '../../../constants/endpoints';

const PRODUCTS_LIMIT = 4;

export const requestSerachProduct = (query: string, offset: string): Promise<any> => {
  return axios.get(SEARCH_ENDPOINT, {
    params: {
      q: query,
      limit: PRODUCTS_LIMIT,
      offset,
    }
  });
};