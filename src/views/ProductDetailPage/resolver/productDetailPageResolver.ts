import axios from 'axios';
import { PRODUCT_DESCRIPTION_ENDPOINT, PRODUCT_DETAIL_ENDPOINT } from '../../../constants/endpoints';

export const requestProductDetail = (productId: string): Promise<any> => {
  return axios.get(`${PRODUCT_DETAIL_ENDPOINT}/${productId}`);
};

export const requestProductDescription = (productId: string): Promise<any> => {
  const productDetailEnpoint = PRODUCT_DESCRIPTION_ENDPOINT.replace(':productId', productId);
  return axios.get(productDetailEnpoint);
};