import {
  MESSAGE_ARRAY_TYPE_ERROR,
  MESSAGE_OBJECT_TYPE_ERROR,
  MESSAGE_WRONG_KEYS_TYPE_ERROR
} from './exceptionsErrors.constants';

class WrongArrayTypeError extends Error {
  name: string;
  constructor() {
    super(MESSAGE_ARRAY_TYPE_ERROR)
    this.name = 'WrongArrayTypeError';
  }
}

class WrongObjectTypeError extends Error {
  name: string;
  constructor() {
    super(MESSAGE_OBJECT_TYPE_ERROR)
    this.name = 'WrongObjectTypeError';
  }
}

class WrongKeysTypeError extends Error {
  name: string;
  constructor() {
    super(MESSAGE_WRONG_KEYS_TYPE_ERROR)
    this.name = 'WrongKeysTypeError';
  }
}

export { WrongArrayTypeError, WrongObjectTypeError, WrongKeysTypeError };