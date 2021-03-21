import { mustBeExitsKeys } from '../../../../common';
import { ItemsApi } from '../../interface/searchPage.interface';
import {
  valuesExpected,
  valuesResultsExpected,
  valuesAddressExpected,
  valuesShippingExpected,
  valuesPaginExpected
} from './apiControl.mock';

export const isApiControlCorrect = (input: ItemsApi): boolean => {
  try {
    mustBeExitsKeys(input, valuesExpected);
    const productList = input.results;
    const paging = input.paging;

    mustBeExitsKeys(paging, valuesPaginExpected);
    productList.forEach((product) => {
      mustBeExitsKeys(product, valuesResultsExpected);
      mustBeExitsKeys(product.address, valuesAddressExpected);
      mustBeExitsKeys(product.shipping, valuesShippingExpected);
    });

    return true;
  } catch (error) {
    return false;
  }
}