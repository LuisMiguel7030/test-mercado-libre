// model
import { prepareData } from '../productDetailPage.model';
// mock
import { productDetailDataApi } from '../../../mock/productDetailPage.mock';

it('Should map correct data', () => {
  expect(prepareData(productDetailDataApi.data)).toEqual({
    id: 'MLA902004880',
    title: 'Consola Nintendo Game & Watch Super Mario Bros.',
    image: 'https://http2.mlstatic.com/D_654198-MLA44397234315_122020-O.jpg',
    isVerticalImage: false,
    condition: 'Nuevo',
    price: {
      amount: 13999,
      decimals: 0,
      currency: 'ARS',
    },
    soldQuantity: 5
  });
});