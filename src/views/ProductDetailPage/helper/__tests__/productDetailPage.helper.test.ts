// helper
import { requestProductDescriptionData, requestProductDetailData } from '../productDetailPage.helper';
// apicontrol
import * as apiControl from '../apiControl/apiControl';
// actions
import {
  onProductDescriptionRequested,
  onProductDescriptionDataSuccess,
  onProductDescriptionDataError,
  onProductDetailRequested,
  onProductDetailDataSuccess,
  onProductDetailDataError,
} from '../../actions/productDetailPage.actions';
// model
import { prepareData } from '../model/productDetailPage.model';
// resolver
import * as resolver from '../../resolver/productDetailPageResolver';
// mock
import { productDetailDataApi, productDescriptionDataApi } from '../../mock/productDetailPage.mock';
// constants
import { API_CONTROL_ERROR, NO_CONTENT } from '../../constants/productDetailPage.constants';

jest.mock('../apiControl/apiControl');
jest.mock('../../actions/productDetailPage.actions');
jest.mock('../model/productDetailPage.model');
jest.mock('../../resolver/productDetailPageResolver');

describe('Helper', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('requestProductDetailData resolve', async () => {
    const dispatch = jest.fn();
    jest.spyOn(apiControl, 'isApiControlCorrect').mockReturnValueOnce(true);
    jest.spyOn(resolver, 'requestProductDetail').mockImplementation(() => Promise.resolve(productDetailDataApi));
    await requestProductDetailData('M123', dispatch);

    expect(onProductDetailRequested).toBeCalledWith(dispatch);
    expect(onProductDetailDataSuccess).toHaveBeenCalled();
    expect(prepareData).toHaveBeenCalledWith(productDetailDataApi.data);
  });

  it('requestProductDetailData resolve incorrect api control', async () => {
    const dispatch = jest.fn();
    jest.spyOn(apiControl, 'isApiControlCorrect').mockReturnValueOnce(false);
    jest.spyOn(resolver, 'requestProductDetail').mockImplementation(() => Promise.resolve(productDetailDataApi));
    await requestProductDetailData('M123', dispatch);

    expect(onProductDetailRequested).toBeCalledWith(dispatch);
    expect(onProductDetailDataError).toHaveBeenCalledWith(API_CONTROL_ERROR, dispatch);
  });

  it('requestProductDetailData resolve no content', async () => {
    const dispatch = jest.fn();
    jest.spyOn(resolver, 'requestProductDetail').mockImplementation(() => Promise.resolve({ data: null }));
    await requestProductDetailData('M123', dispatch);

    expect(onProductDetailRequested).toBeCalledWith(dispatch);
    expect(onProductDetailDataError).toHaveBeenCalledWith(NO_CONTENT, dispatch);
  });

  it('requestProductDetailData reject', async () => {
    const dispatch = jest.fn();
    jest.spyOn(resolver, 'requestProductDetail').mockImplementation(() => Promise.reject(new Error()));
    await requestProductDetailData('M123', dispatch);

    expect(onProductDetailRequested).toHaveBeenCalled();
  });

  it('requestProductDescriptionData resolve', async () => {
    const dispatch = jest.fn();
    jest.spyOn(apiControl, 'isApiDescriptionControlCorrect').mockReturnValueOnce(true);
    jest.spyOn(resolver, 'requestProductDescription').mockImplementation(() => Promise.resolve(productDescriptionDataApi));
    await requestProductDescriptionData('M123', dispatch);

    expect(onProductDescriptionRequested).toBeCalledWith(dispatch);
    expect(onProductDescriptionDataSuccess).toHaveBeenCalledWith(productDescriptionDataApi.data.plain_text, dispatch);
  });

  it('requestProductDescriptionData resolve incorrect api control', async () => {
    const dispatch = jest.fn();
    jest.spyOn(apiControl, 'isApiDescriptionControlCorrect').mockReturnValueOnce(false);
    jest.spyOn(resolver, 'requestProductDescription').mockImplementation(() => Promise.resolve(productDescriptionDataApi));
    await requestProductDescriptionData('M123', dispatch);

    expect(onProductDescriptionRequested).toBeCalledWith(dispatch);
    expect(onProductDescriptionDataError).toHaveBeenCalledWith(API_CONTROL_ERROR, dispatch);
  });

  it('requestProductDescriptionData resolve no content', async () => {
    const dispatch = jest.fn();
    jest.spyOn(resolver, 'requestProductDescription').mockImplementation(() => Promise.resolve({ data: null }));
    await requestProductDescriptionData('M123', dispatch);

    expect(onProductDescriptionRequested).toBeCalledWith(dispatch);
    expect(onProductDescriptionDataError).toHaveBeenCalledWith(NO_CONTENT, dispatch);
  });
});

