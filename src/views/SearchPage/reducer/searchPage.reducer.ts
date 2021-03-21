// constants
import {
  SEARCH_DATA_REQUESTED,
  FETCH_SEARCH_DATA_ERROR,
  FETCH_SEARCH_DATA_SUCCESS
 } from '../constants/searchPage.constants';
 // interface
 import { InitialState } from '../interface/searchPage.interface';

const initialState: InitialState = {
  isSearchFetching: false,
  isSearchError: false,
  searchError: '',
  products: [],
  totalProducts: null
}

const reducer = (state: InitialState, action: any): InitialState => {
  switch (action.type) {
    case SEARCH_DATA_REQUESTED:
      return {
        ...state,
        isSearchFetching: true
      };
    case FETCH_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isSearchFetching: false,
        products: action.value.products,
        totalProducts: action.value.totalProducts
      };
    case FETCH_SEARCH_DATA_ERROR:
      return {
        ...state,
        isSearchFetching: false,
        isSearchError: true,
        searchError: action.value
      };
    default:
      return state;
  }
}

export { initialState, reducer };