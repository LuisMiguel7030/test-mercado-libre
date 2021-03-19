// apicontrol
import { isApiDescriptionControlCorrect, isApiControlCorrect } from '../apiControl';
// mocks
import { productDetailDataApi, productDescriptionDataApi } from '../../../mock/productDetailPage.mock';

it('Should isApiControlCorrect return true', () => {
  expect(isApiControlCorrect(productDetailDataApi.data)).toBeTruthy();
});

it('Should isApiControlCorrect false', () => {
  const apiData = productDetailDataApi.data
  delete apiData.title;
  expect(isApiControlCorrect(apiData)).toBeFalsy();
});

it('Should pisApiDescriptionControlCorrect return true', () => {
  expect(isApiDescriptionControlCorrect(productDescriptionDataApi.data)).toBeTruthy();
});

it('Should isApiDescriptionControlCorrect return false', () => {
  const apiData = productDescriptionDataApi.data
  delete apiData.plain_text;
  expect(isApiDescriptionControlCorrect(apiData)).toBeFalsy();
});