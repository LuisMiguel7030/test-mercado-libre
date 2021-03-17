import {
  WrongArrayTypeError,
  WrongKeysTypeError,
  WrongObjectTypeError
} from './exceptionsErrors';

interface ValitaionApi {
  key: string;
  type: string;
}

const mustBeArray = (input: Array<any>): void => {
  if(!Array.isArray(input)) throw new WrongArrayTypeError();
};

const mustBeObject = (input: Object): void => {
  if(typeof input !== 'object' || Array.isArray(input)) throw new WrongObjectTypeError();
};

const mustBeExitsKeys = (input: Object, validations: Array<ValitaionApi>): void => {
  const isCorrect: boolean = validations.every((validation) => {
    if(input.hasOwnProperty(validation.key)) {
      if(typeof input[validation.key] === validation.type && !Array.isArray(input[validation.key])) {
        return true;
      } else if(validation.type === 'array' && Array.isArray(input[validation.key])) {
        return true;
      }
    }
    return false;
  });

  if(!isCorrect) throw new WrongKeysTypeError();
};

export { mustBeArray, mustBeObject, mustBeExitsKeys };
export type { ValitaionApi };
