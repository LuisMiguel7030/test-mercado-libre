// apicontrol
import { isApiControlCorrect } from '../apiControl';
// mocks
import { mockSearchDataApi } from '../../../mock/searchPage.mock';

it('Should isApiControlCorrect return true', () => {
  expect(isApiControlCorrect(mockSearchDataApi.data)).toBeTruthy();
});

it('Should isApiControlCorrect false', () => {
  const apiData = mockSearchDataApi.data;
  delete apiData.results[0].title;
  expect(isApiControlCorrect(apiData)).toBeFalsy();
});
