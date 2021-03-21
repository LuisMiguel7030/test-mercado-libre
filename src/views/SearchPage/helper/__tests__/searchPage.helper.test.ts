// helper
import { requestSearchData } from '../searchPage.helper';
// apicontrol
import * as apiControl from '../apiControl/apiControl';
// actions
import {
  onSearchDataError,
  onSearchDataSuccess,
  onSearchRequested
} from '../../actions/searchPage.actions';
// model
import { prepareData } from '../model/searchPage.model';
// resolver
import * as resolver from '../../resolver/searchPageResolver';
// mock
import { mockSearchDataApi } from '../../mock/searchPage.mock';
// constants
import { API_CONTROL_ERROR, NO_CONTENT } from '../../constants/searchPage.constants';

jest.mock('../apiControl/apiControl');
jest.mock('../../actions/searchPage.actions');
jest.mock('../model/searchPage.model');
jest.mock('../../resolver/searchPageResolver');

describe('Helper', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('requestSearchData resolve', async () => {
    const dispatch = jest.fn();
    jest.spyOn(apiControl, 'isApiControlCorrect').mockReturnValueOnce(true);
    jest.spyOn(resolver, 'requestSerachProduct').mockImplementation(() => Promise.resolve(mockSearchDataApi));
    await requestSearchData('carro', '0',dispatch);

    expect(onSearchRequested).toBeCalledWith(dispatch);
    expect(onSearchDataSuccess).toHaveBeenCalled();
    expect(prepareData).toHaveBeenCalledWith(mockSearchDataApi.data);
  });

  it('requestSearchData resolve incorrect api control', async () => {
    const dispatch = jest.fn();
    jest.spyOn(apiControl, 'isApiControlCorrect').mockReturnValueOnce(false);
    jest.spyOn(resolver, 'requestSerachProduct').mockImplementation(() => Promise.resolve(mockSearchDataApi));
    await requestSearchData('carro', '0', dispatch);

    expect(onSearchRequested).toBeCalledWith(dispatch);
    expect(onSearchDataError).toHaveBeenCalledWith(API_CONTROL_ERROR, dispatch);
  });

  it('requestSearchData resolve no content', async () => {
    const dispatch = jest.fn();
    jest.spyOn(resolver, 'requestSerachProduct').mockImplementation(() => Promise.resolve({ data: null }));
    await requestSearchData('carro', '0', dispatch);

    expect(onSearchRequested).toBeCalledWith(dispatch);
    expect(onSearchDataError).toHaveBeenCalledWith(NO_CONTENT, dispatch);
  });

  it('requestProductDetailData reject', async () => {
    const dispatch = jest.fn();
    jest.spyOn(resolver, 'requestSerachProduct').mockImplementation(() => Promise.reject(new Error()));
    await requestSearchData('carro', '0', dispatch);

    expect(onSearchRequested).toHaveBeenCalled();
  });
});

