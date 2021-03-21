// constatns
import {
  SEARCH_DATA_REQUESTED,
  FETCH_SEARCH_DATA_SUCCESS,
  FETCH_SEARCH_DATA_ERROR
} from '../../constants/searchPage.constants'
// actions
import {
  onSearchRequested,
  onSearchDataSuccess,
  onSearchDataError
} from '../searchPage.actions';
// mock
import { mockProductsData } from '../../mock/searchPage.mock'

const dispatch = jest.fn();

it('onSearchDataError', () => {
  onSearchDataError('ERROR', dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: FETCH_SEARCH_DATA_ERROR,
    value: 'ERROR'
  });
});

it('onSearchDataSuccess', () => {
  onSearchDataSuccess(mockProductsData, dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: FETCH_SEARCH_DATA_SUCCESS,
    value: mockProductsData,
  });
});

it('onSearchRequested', () => {
  onSearchRequested(dispatch);
  expect(dispatch).toHaveBeenCalledWith({ type: SEARCH_DATA_REQUESTED });
});