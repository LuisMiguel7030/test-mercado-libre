import { ValitaionApi } from '../../../../common';

export const valuesPicturesExpected: Array<ValitaionApi> = [
  { key: 'id', type: 'string' },
  { key: 'secure_url', type: 'string' }
];

export const valuesExpected: Array<ValitaionApi> = [
  { key: 'id', type: 'string' },
  { key: 'title', type: 'string' },
  { key: 'price', type: 'number' },
  { key: 'condition', type: 'string' },
  { key: 'currency_id', type: 'string' },
  { key: 'pictures', type: 'array' },
  { key: 'sold_quantity', type: 'number' },
];

export const valuesDescriptionExpected: Array<ValitaionApi> = [
  { key: 'plain_text', type: 'string' },
];