
// interface
import { ProductDetailState } from '../interface/productDetailPage.interface';
import { Dispatch } from '../../../shared/interface/common.interface';
// constants
import {
  PRODUCT_DETAIL_REQUESTED,
  FETCH_PRODUCT_DETAIL_DATA_SUCCESS,
  FETCH_PRODUCT_DETAIL_DATA_ERROR,
  PRODUCT_DESCRIPTION_REQUESTED,
  FETCH_PRODUCT_DESCRIPTION_DATA_ERROR,
  FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS
} from '../constants/productDetailPage.constants';

export const onProductDetailRequested = (dispatch: Function): void => {
  const content: Dispatch = {
    type: PRODUCT_DETAIL_REQUESTED
  }
  dispatch(content);
};

export const onProductDetailDataSuccess = (product: ProductDetailState, dispatch: Function): void => {
  const content: Dispatch = {
    type: FETCH_PRODUCT_DETAIL_DATA_SUCCESS,
    value: product
  };
  dispatch(content);
};

export const onProductDetailDataError = (error: string, dispatch: Function): void => {
  const content: Dispatch = {
    type: FETCH_PRODUCT_DETAIL_DATA_ERROR,
    value: error
  };
  dispatch(content);
};

export const onProductDescriptionRequested = (dispatch: Function): void => {
  const content: Dispatch = {
    type: PRODUCT_DESCRIPTION_REQUESTED
  }
  dispatch(content);
};

export const onProductDescriptionDataSuccess = (product: string, dispatch: Function): void => {
  const content: Dispatch = {
    type: FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS,
    value: product
  };
  dispatch(content);
};

export const onProductDescriptionDataError = (error: string, dispatch: Function): void => {
  const content: Dispatch = {
    type: FETCH_PRODUCT_DESCRIPTION_DATA_ERROR,
    value: error
  };
  dispatch(content);
};