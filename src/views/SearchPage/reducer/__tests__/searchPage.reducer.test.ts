// constants
import { Dispatch } from '../../../../shared/interface/common.interface';
import {
  SEARCH_DATA_REQUESTED,
  FETCH_SEARCH_DATA_ERROR,
  FETCH_SEARCH_DATA_SUCCESS,
 } from '../../constants/searchPage.constants';
import { InitialState } from '../../interface/searchPage.interface';
// reducer
import { reducer, initialState } from '../searchPage.reducer';
// mocks
import { mockProductsData } from '../../mock/searchPage.mock';

let dispath: Dispatch;
let resutl: InitialState;

it('reducer SEARCH_DATA_REQUESTED', () => {
  dispath = { type: SEARCH_DATA_REQUESTED };
  resutl = { ...initialState, ...{ isSearchFetching: true }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});

it('reducer FETCH_SEARCH_DATA_SUCCESS', () => {
  dispath = { type: FETCH_SEARCH_DATA_SUCCESS, value: { totalProducts: 20, products: mockProductsData} };
  resutl = { ...initialState, ...{
    products: mockProductsData,
    totalProducts: 20
  }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});

it('reducer FETCH_SEARCH_DATA_ERROR', () => {
  dispath = { type: FETCH_SEARCH_DATA_ERROR, value: 'ERROR' };
  resutl = { ...initialState, ...{
    isSearchError: true,
    searchError: 'ERROR'
  }};
  expect(reducer(initialState, dispath)).toEqual(resutl);
});
