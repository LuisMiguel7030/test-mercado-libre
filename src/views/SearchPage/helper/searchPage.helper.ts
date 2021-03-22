// actions
import { onSearchDataError, onSearchDataSuccess, onSearchRequested } from '../actions/searchPage.actions';
// constants
import { NO_CONTENT, API_CONTROL_ERROR, PRODUCTS_LIMIT } from '../constants/searchPage.constants';
// model
import { prepareData } from './model/searchPage.model';
// resolver
import { requestSerachProduct } from '../resolver/searchPageResolver';
// apiControl
import { isApiControlCorrect } from './apiControl/apiControl';

export const requestSearchData = (query: string, page: string, dispatch: Function): void => {
  const offset = Number(page) * PRODUCTS_LIMIT;
  onSearchRequested(dispatch);
  requestSerachProduct(query, offset)
    .then((products) => {
      if(products.data) {
        if(isApiControlCorrect(products.data)) {
          onSearchDataSuccess(prepareData(products.data), dispatch);
        } else {
          onSearchDataError(API_CONTROL_ERROR, dispatch);
        }
      } else {
        onSearchDataError(NO_CONTENT, dispatch);
      }
    })
    .catch((error) => {
      onSearchDataError(error, dispatch);
    })
};