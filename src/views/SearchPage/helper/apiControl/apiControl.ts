import { mustBeExitsKeys, mustBeObject, mustBeArray } from '../../../../common';
import { Product } from '../../../../shared/interface/product';
import { valuesExpected, valuesAddressExpected, valuesShippingExpected } from './apiControl.mock';

export const isApiControlCorrect = (input: any): boolean => {
  try {
    mustBeObject(input);
    const productList: Array<Product> = input.results;
    mustBeArray(productList);

    productList.forEach((product) => {
      mustBeExitsKeys(product, valuesExpected);
      mustBeExitsKeys(product.address, valuesAddressExpected);
      mustBeExitsKeys(product.shipping, valuesShippingExpected);
    });

    return true;
  } catch (error) {
    return false;
  }
}