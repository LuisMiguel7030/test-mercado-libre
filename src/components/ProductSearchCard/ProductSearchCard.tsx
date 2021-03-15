// vendors
import React from 'react';
// components
import { Icon, formatNumber } from '../../common';
// styles
import {
  Container,
  InformationContainer,
  PriceContainer,
  Price,
  Title,
  Condition,
  Location,
  ProductImage,
  ContainerHandlerStyled
} from './productSearchCard.styled';

type Props = {
  //** title text card */
  title: string,
  //** free shipping icon */
  isFreeShipping?: boolean,
  //** condition text card */
  condition?: string,
  //** location text card */
  location?: string,
  //** price product */
  price: {
    currency: string,
    amount: number,
    decimals: number
  }
  //** image card */
  img: {
    url: string,
    alt: string
  },
  //** link product */
  href?: string,
  //** onClick product */
  handleClick?: () => void
}

const ProductSearchCard = (props: Props): JSX.Element  => {
  const {
    title,
    isFreeShipping,
    condition,
    location,
    img,
    price,
    href,
    handleClick
  } = props;
  const freeShippingIcon = (isFreeShipping) && <Icon icon="ic_shipping" alt="Envio gratis" islarge width={24} height={24} />;
  const priceValue = formatNumber(price.amount, {
    style: 'currency',
    currency: price.currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: price.decimals
  });

  return (
    <ContainerHandlerStyled href={href} onClick={handleClick}>
      <Container>
        <ProductImage src={img.url} alt={img.alt} />
        <InformationContainer>
          <PriceContainer>
            <Price>{priceValue}</Price>
            {freeShippingIcon}
          </PriceContainer>
          <Title>{title}</Title>
          <Condition>{condition}</Condition>
        </InformationContainer>
        <Location>{location}</Location>
      </Container>
    </ContainerHandlerStyled>
  );
};

ProductSearchCard.defaultProps = {
  isFreeShipping: false
};

export default ProductSearchCard;
