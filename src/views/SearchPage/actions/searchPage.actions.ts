
// interface
import { SearchDataSuccessValueAction } from '../interface/searchPage.interface';
import { Dispatch } from '../../../shared/interface/common.interface';
// constants
import { SEARCH_DATA_REQUESTED, FETCH_SEARCH_DATA_SUCCESS, FETCH_SEARCH_DATA_ERROR } from '../constants/searchPage.constants';

export const onSearchRequested = (dispatch: Function): void => {
  const content: Dispatch = {
    type: SEARCH_DATA_REQUESTED
  }
  dispatch(content);
};

export const onSearchDataSuccess = (value: SearchDataSuccessValueAction, dispatch: Function): void => {
  const content: Dispatch = {
    type: FETCH_SEARCH_DATA_SUCCESS,
    value
  };
  dispatch(content);
};

export const onSearchDataError = (error: string, dispatch: Function): void => {
  const content: Dispatch = {
    type: FETCH_SEARCH_DATA_ERROR,
    value: error
  };
  dispatch(content);
};