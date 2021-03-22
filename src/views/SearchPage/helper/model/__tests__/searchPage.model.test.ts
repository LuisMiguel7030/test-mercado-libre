// model
import { prepareData } from '../searchPage.model';
// mock
import { mockSearchDataApi } from '../../../mock/searchPage.mock';

it('Should map correct data', () => {
  expect(prepareData(mockSearchDataApi.data)).toEqual({
    totalProducts: 1000,
    products: [
      {
        id: 'MLA912601780',
        title: 'Hidrolavadora Philco Mjphi127 De 1600w Con 135bar De Presión Máxima 220v',
        image: 'http://http2.mlstatic.com/D_684624-MLA40450270150_012020-I.jpg',
        address: {
          cityName: 'Villa Crespo',
          stateName: 'Capital Federal',
        },
        condition: 'new',
        price: {
          amount: 16199,
          decimals: 0,
          currency: 'ARS',
        },
        freeShipping: true
      }
    ]
  });
});