import { Product } from 'src/shared/interface/product';
import { PriceData } from '../../../shared/interface/common.interface';

export interface ProductState {
  id: string;
  title: string;
  image: string;
  address: {
    cityName: string;
    stateName: string;
  },
  condition: string;
  price: PriceData
  freeShipping: boolean;
}

export interface InitialState {
  isSearchFetching: boolean;
  isSearchError: boolean;
  searchError: string,
  products: Array<ProductState>
 }