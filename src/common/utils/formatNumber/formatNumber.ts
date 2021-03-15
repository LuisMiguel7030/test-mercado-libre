
export const formatNumber = (value: number, options: Intl.NumberFormatOptions ): string => {
  const currentLocation = 'es-CO' // TODO: get from storage;
  let formattedValue = new Intl.NumberFormat(currentLocation, options).format(value);

  return formattedValue;
};