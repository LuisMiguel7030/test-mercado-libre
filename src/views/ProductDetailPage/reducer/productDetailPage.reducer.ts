// constants
import {
  PRODUCT_DETAIL_REQUESTED,
  FETCH_PRODUCT_DETAIL_DATA_SUCCESS,
  FETCH_PRODUCT_DETAIL_DATA_ERROR,
  PRODUCT_DESCRIPTION_REQUESTED,
  FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS,
  FETCH_PRODUCT_DESCRIPTION_DATA_ERROR
 } from '../constants/productDetailPage.constants';
 // interface
 import { InitialState } from '../interface/productDetailPage.interface';

const initialState: InitialState = {
  isProductDetailFetching: false,
  isProductDetailError: false,
  productDetailError: '',
  productDetail: null,
  isProductDescriptionFetching: false,
  isProductDescriptionError: false,
  productDescriptionError: '',
  productDescription: null
}

const reducer = (state: InitialState, action: any): InitialState => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUESTED:
      return {
        ...state,
        isProductDetailFetching: true
      };
    case FETCH_PRODUCT_DETAIL_DATA_SUCCESS:
      return {
        ...state,
        isProductDetailFetching: false,
        productDetail: action.value
      };
    case FETCH_PRODUCT_DETAIL_DATA_ERROR:
      return {
        ...state,
        isProductDetailFetching: false,
        isProductDetailError: true,
        productDetailError: action.value
      };
    case PRODUCT_DESCRIPTION_REQUESTED:
      return {
        ...state,
        isProductDescriptionFetching: true
      };
    case FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS:
      return {
        ...state,
        isProductDescriptionFetching: false,
        productDescription: action.value
      };
    case FETCH_PRODUCT_DESCRIPTION_DATA_ERROR:
      return {
        ...state,
        isProductDescriptionFetching: false,
        isProductDescriptionError: true,
        productDescriptionError: action.value
      };
    default:
      return state;
  }
}

export { initialState, reducer };