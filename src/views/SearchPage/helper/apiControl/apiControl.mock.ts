export const valuesAddressExpected = [
  { key: 'state_name', type: 'string' },
  { key: 'city_name', type: 'string' }
];

export const valuesShippingExpected = [
  { key: 'free_shipping', type: 'boolean' }
];

export const valuesExpected = [
  { key: 'site_id', type: 'string' },
  { key: 'query', type: 'string' },
  { key: 'paging', type: 'object' },
  { key: 'results', type: 'array' },
];

export const valuesPaginExpected = [
  { key: 'total', type: 'number' },
  { key: 'primary_results', type: 'number' },
  { key: 'offset', type: 'number' },
  { key: 'limit', type: 'number' },
];

export const valuesResultsExpected = [
  { key: 'id', type: 'string' },
  { key: 'title', type: 'string' },
  { key: 'price', type: 'number' },
  { key: 'address', type: 'object' },
  { key: 'condition', type: 'string' },
  { key: 'currency_id', type: 'string' },
  { key: 'shipping', type: 'object' },
  { key: 'thumbnail', type: 'string' },
];
