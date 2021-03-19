// constants
import { Dispatch } from '../../../../shared/interface/common.interface';
import {
  PRODUCT_DETAIL_REQUESTED,
  FETCH_PRODUCT_DETAIL_DATA_SUCCESS,
  FETCH_PRODUCT_DETAIL_DATA_ERROR,
  PRODUCT_DESCRIPTION_REQUESTED,
  FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS,
  FETCH_PRODUCT_DESCRIPTION_DATA_ERROR
 } from '../../constants/productDetailPage.constants';
import { InitialState } from '../../interface/productDetailPage.interface';
// reducer
import { reducer, initialState } from '../productDetailPage.reducer';
// mocks
import { productDetailStateData } from '../../mock/productDetailPage.mock';

let dispath: Dispatch;
let resutl: InitialState;
let defaultState: InitialState = {
  isProductDetailFetching: false,
  isProductDetailError: false,
  productDetailError: '',
  productDetail: null,
  isProductDescriptionFetching: false,
  isProductDescriptionError: false,
  productDescriptionError: '',
  productDescription: null
};

it('reducer PRODUCT_DETAIL_REQUESTED', () => {
  dispath = { type: PRODUCT_DETAIL_REQUESTED };
  resutl = { ...defaultState, ...{ isProductDetailFetching: true }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});

it('reducer FETCH_PRODUCT_DETAIL_DATA_SUCCESS', () => {
  dispath = { type: FETCH_PRODUCT_DETAIL_DATA_SUCCESS, value: productDetailStateData };
  resutl = { ...defaultState, ...{ productDetail: productDetailStateData }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});

it('reducer FETCH_PRODUCT_DETAIL_DATA_ERROR', () => {
  dispath = { type: FETCH_PRODUCT_DETAIL_DATA_ERROR, value: 'ERROR' };
  resutl = { ...defaultState, ...{
    isProductDetailError: true,
    productDetailError: 'ERROR'
  }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});

it('reducer PRODUCT_DESCRIPTION_REQUESTED', () => {
  dispath = { type: PRODUCT_DESCRIPTION_REQUESTED };
  resutl = { ...defaultState, ...{ isProductDescriptionFetching: true }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});

it('reducer FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS', () => {
  dispath = { type: FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS, value: 'mock text' };
  resutl = { ...defaultState, ...{ productDescription: 'mock text' }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});

it('reducer FETCH_PRODUCT_DESCRIPTION_DATA_ERROR', () => {
  dispath = { type: FETCH_PRODUCT_DESCRIPTION_DATA_ERROR, value: 'ERROR' };
  resutl = { ...defaultState, ...{
    isProductDescriptionError: true,
    productDescriptionError: 'ERROR'
  }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});