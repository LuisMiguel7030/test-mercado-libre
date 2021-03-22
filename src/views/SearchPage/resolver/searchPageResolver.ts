// vendors
import axios from 'axios';
// constants
import { SEARCH_ENDPOINT } from '../../../constants/endpoints';
import { PRODUCTS_LIMIT } from '../constants/searchPage.constants';

export const requestSerachProduct = (query: string, offset: number): Promise<any> => {
  return axios.get(SEARCH_ENDPOINT, {
    params: {
      q: query,
      limit: PRODUCTS_LIMIT,
      offset,
    }
  });
};