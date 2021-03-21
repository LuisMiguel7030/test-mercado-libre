// vendors
import axios from 'axios';
// resolver
import { requestSerachProduct } from '../searchPageResolver';
// constatns
import { SEARCH_ENDPOINT } from '../../../../constants/endpoints';


it('Should get requestSerachProduct with correct endpoint', () => {
  const spyAxiosGet = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve());
  requestSerachProduct('carro', '2');
  expect(spyAxiosGet).toHaveBeenCalledWith(SEARCH_ENDPOINT, {
    params: {
      q: 'carro',
      limit: 4,
      offset: '2',
    }
  });
})
