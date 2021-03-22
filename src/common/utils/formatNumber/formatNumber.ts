import { FORMAT_CUSTOM_CURRENCY_BY_LENGUAGE } from './formatCustomCurrency';

export const formatNumber = (value: number, options: Intl.NumberFormatOptions ): string => {
  const currentLenguage = 'es';
  const currentLocation = 'AR'; // TODO: get from storage;
  let formattedValue = new Intl.NumberFormat(`${currentLenguage}-${currentLocation}`, options).format(value);

  const customFormat = FORMAT_CUSTOM_CURRENCY_BY_LENGUAGE[currentLenguage];
  if(currentLenguage === 'es') {
    formattedValue = customFormat(value, formattedValue);
  }

  return formattedValue;
};