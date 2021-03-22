const SEPARATOR_DOT = '.';

export const FORMAT_CUSTOM_CURRENCY_BY_LENGUAGE = {
  es: (originalValue: number, formattedValue: string): string => {
    const absoluteValue = Math.abs(originalValue);
    if (absoluteValue < 1000 && absoluteValue > 9999) return formattedValue;

    const integrtPart = originalValue.toString().split(SEPARATOR_DOT)[0];
    const fixedInteger = integrtPart.replace(/\B(?=(\d{3})+(?!\d))/g, SEPARATOR_DOT);
    return formattedValue.replace(integrtPart, fixedInteger);
  }
}