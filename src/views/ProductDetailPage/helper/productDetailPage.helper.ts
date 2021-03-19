// actions
import {
  onProductDetailDataError,
  onProductDetailDataSuccess,
  onProductDetailRequested,
  onProductDescriptionDataError,
  onProductDescriptionDataSuccess,
  onProductDescriptionRequested
} from '../actions/productDetailPage.actions';
// constants
import { NO_CONTENT, API_CONTROL_ERROR } from '../constants/productDetailPage.constants';
// model
import { prepareData } from './model/productDetailPage.model';
// resolver
import { requestProductDetail, requestProductDescription } from '../resolver/productDetailPageResolver';
// apiControl
import { isApiControlCorrect, isApiDescriptionControlCorrect } from './apiControl/apiControl';

export const requestProductDetailData = (productId: string, dispatch: Function): void => {
  onProductDetailRequested(dispatch);
  requestProductDetail(productId)
    .then((products) => {
      if(products.data) {
        if(isApiControlCorrect(products.data)) {
          onProductDetailDataSuccess(prepareData(products.data), dispatch);
        } else {
          onProductDetailDataError(API_CONTROL_ERROR, dispatch);
        }
      } else {
        onProductDetailDataError(NO_CONTENT, dispatch);
      }
    })
    .catch((error) => {
      onProductDetailDataError(error, dispatch);
    })
};

export const requestProductDescriptionData = (productId: string, dispatch: Function): void => {
  onProductDescriptionRequested(dispatch);
  requestProductDescription(productId)
    .then((products) => {
      if(products.data) {
        if(isApiDescriptionControlCorrect(products.data)) {
          onProductDescriptionDataSuccess(products.data.plain_text, dispatch);
        } else {
          onProductDescriptionDataError(API_CONTROL_ERROR, dispatch);
        }
      } else {
        onProductDescriptionDataError(NO_CONTENT, dispatch);
      }
    })
    .catch((error) => {
      onProductDescriptionDataError(error, dispatch);
    })
};