import { Product } from 'src/shared/interface/product';
import { PriceData } from '../../../shared/interface/common.interface';

export interface ItemsApi {
  site_id: string,
  query: string,
  paging: {
    total: number,
    primary_results: number,
    offset: number,
    limit: number
  },
  results: Array<Product>,
  secondary_results: Array<any>
  related_results: Array<any>
  sort: any,
  available_sorts: Array<any>
  filters: Array<any>
  available_filters: Array<any>
}

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

export interface SearchDataSuccessValueAction {
  totalProducts: number;
  products: Array<ProductState>;
}

export interface InitialState {
  isSearchFetching: boolean;
  isSearchError: boolean;
  searchError: string,
  totalProducts: number,
  products: Array<ProductState>
 }