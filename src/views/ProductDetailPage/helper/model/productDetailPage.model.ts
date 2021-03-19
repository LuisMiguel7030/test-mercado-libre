import { Product } from '../../../../shared/interface/product';
import { ProductDetailState } from '../../interface/productDetailPage.interface';

const NEW_CONDITION = 'new';

export const prepareData = (input: Product): ProductDetailState => {
  const sizeList = input.pictures[0].size.split('x');
  const verticalImage = !!(sizeList[0] < sizeList[1]);

  return {
    id: input.id,
    title: input.title,
    image: input.pictures[0].secure_url,
    isVerticalImage: verticalImage,
    condition: (input.condition === NEW_CONDITION) ? 'Nuevo' : input.condition,
    price: {
      amount: input.price,
      decimals: 0,
      currency: input.currency_id,
    },
    soldQuantity: input.sold_quantity
  }
};