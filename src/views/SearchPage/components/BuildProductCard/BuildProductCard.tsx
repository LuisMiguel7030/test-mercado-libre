// vendors
import React from 'react';
// components
import ProductSearchCard from '../../../../components/ProductSearchCard/ProductSearchCard';
// interface
import { ProductState } from '../../interface/searchPage.interface';
// constants
import { DETAIL_ROUTE } from '../../../../constants/routes';
// styles
import { CardItem } from './buildProductCard.styled';

type Props = {
  //** product to map data */
  product: ProductState
}

const BuildProductCard = ({ product }: Props): JSX.Element => {
  const {
    id, title, image, condition, freeShipping, address, price
  } = product;
  const detailProductUrl = DETAIL_ROUTE.replace(':id', id);

  return (
    <CardItem>
      <ProductSearchCard
        title={title}
        img={{
          alt: title,
          url: image
        }}
        condition={condition}
        location={address.stateName}
        price={price}
        href={detailProductUrl}
        isFreeShipping={freeShipping}
      />
    </CardItem>
  );
};

export default BuildProductCard;