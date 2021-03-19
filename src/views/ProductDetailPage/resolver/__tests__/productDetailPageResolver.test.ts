// vendors
import axios from 'axios';
// resolver
import { requestProductDescription, requestProductDetail } from '../productDetailPageResolver';
// constatns
import { PRODUCT_DESCRIPTION_ENDPOINT, PRODUCT_DETAIL_ENDPOINT } from '../../../../constants/endpoints';


it('Should get requestProductDescription with correct endpoint', () => {
  const spyAxiosGet = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve());
  requestProductDescription('M123');
  expect(spyAxiosGet).toHaveBeenCalledWith(PRODUCT_DESCRIPTION_ENDPOINT.replace(':productId', 'M123'));
})

it('Should get requestProductDetail with correct endpoint', () => {
  const spyAxiosGet = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve());
  requestProductDetail('M123');
  expect(spyAxiosGet).toHaveBeenCalledWith(`${PRODUCT_DETAIL_ENDPOINT}/M123`);
})