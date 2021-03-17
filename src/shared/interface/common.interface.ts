export interface PriceData {
  amount: number;
  decimals: number;
  currency: string;
}

export interface Dispatch {
  type: string,
  value?: string | Array<any> | boolean | number | Object
}