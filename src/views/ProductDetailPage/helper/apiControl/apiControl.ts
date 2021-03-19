import { mustBeExitsKeys, mustBeObject } from '../../../../common';
import { Product } from '../../../../shared/interface/product';
import { valuesExpected, valuesPicturesExpected, valuesDescriptionExpected } from './apiControl.mock';

export const isApiControlCorrect = (input: Product): boolean => {
  try {
    mustBeObject(input);
    mustBeExitsKeys(input, valuesExpected);

    input.pictures.forEach((picture) => {
      mustBeExitsKeys(picture, valuesPicturesExpected);
    });

    return true;
  } catch (error) {
    return false;
  }
}

export const isApiDescriptionControlCorrect = (input): boolean => {
  try {
    mustBeObject(input);
    mustBeExitsKeys(input, valuesDescriptionExpected);

    return true;
  } catch (error) {
    return false;
  }
}