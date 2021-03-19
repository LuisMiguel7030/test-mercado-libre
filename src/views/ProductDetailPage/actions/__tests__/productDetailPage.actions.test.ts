// constatns
import {
  PRODUCT_DETAIL_REQUESTED,
  FETCH_PRODUCT_DETAIL_DATA_ERROR,
  FETCH_PRODUCT_DETAIL_DATA_SUCCESS,
  PRODUCT_DESCRIPTION_REQUESTED,
  FETCH_PRODUCT_DESCRIPTION_DATA_ERROR,
  FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS,
} from '../../constants/productDetailPage.constants'
// actions
import {
  onProductDetailDataError,
  onProductDetailDataSuccess,
  onProductDetailRequested,
  onProductDescriptionDataError,
  onProductDescriptionDataSuccess,
  onProductDescriptionRequested
} from '../productDetailPage.actions';
// mock
import { productDetailStateData} from '../../mock/productDetailPage.mock'

const dispatch = jest.fn();

it('onProductDetailDataError', () => {
  onProductDetailDataError('ERROR', dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: FETCH_PRODUCT_DETAIL_DATA_ERROR,
    value: 'ERROR'
  });
});

it('onProductDetailDataSuccess', () => {
  onProductDetailDataSuccess(productDetailStateData, dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: FETCH_PRODUCT_DETAIL_DATA_SUCCESS,
    value: productDetailStateData,
  });
});

it('onProductDetailRequested', () => {
  onProductDetailRequested(dispatch);
  expect(dispatch).toHaveBeenCalledWith({ type: PRODUCT_DETAIL_REQUESTED });
});

it('onProductDescriptionDataError', () => {
  onProductDescriptionDataError('ERROR', dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: FETCH_PRODUCT_DESCRIPTION_DATA_ERROR,
    value: 'ERROR'
  });
});

it('onProductDescriptionDataSuccess', () => {
  onProductDescriptionDataSuccess('mock text', dispatch);
  expect(dispatch).toHaveBeenCalledWith({
    type: FETCH_PRODUCT_DESCRIPTION_DATA_SUCCESS,
    value: 'mock text',
  });
});

it('onProductDescriptionRequested', () => {
  const dispatch = jest.fn();
  onProductDescriptionRequested(dispatch);
  expect(dispatch).toHaveBeenCalledWith({ type: PRODUCT_DESCRIPTION_REQUESTED });
});