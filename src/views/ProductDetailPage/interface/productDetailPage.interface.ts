import { PriceData } from '../../../shared/interface/common.interface';

export interface ProductDetailState {
  id: string;
  title: string;
  image: string;
  isVerticalImage: boolean;
  condition: string;
  price: PriceData
  soldQuantity: number;
}

export interface InitialState {
  isProductDetailFetching: boolean;
  isProductDetailError: boolean;
  productDetailError: string;
  productDetail: ProductDetailState | null,
  isProductDescriptionFetching: boolean,
  isProductDescriptionError: boolean,
  productDescriptionError: string,
  productDescription: string
 }