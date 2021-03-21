import { Product } from '../../../../shared/interface/product';
import { ProductState } from '../../interface/searchPage.interface';

export const prepareData = (input: Array<Product>): Array<ProductState> => {
  return input.map((product) => ({
    id: product.id,
    title: product.title,
    image: product.thumbnail,
    address: {
      cityName: product.address.city_name,
      stateName: product.address.state_name,
    },
    condition: product.condition,
    price: {
      amount: product.price,
      decimals: 0,
      currency: product.currency_id,
    },
    freeShipping: product.shipping.free_shipping
  }));
};