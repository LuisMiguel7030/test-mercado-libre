
// vendors
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
// components
import PageContent from '../../components/PageContent/PageContent';
import { formatNumber, Button, Loading } from '../../common';
// context
import { ProductDetailPageContext } from './context/productDetailPage.context';
// constants
import { HOME_ROUTE } from '../../constants/routes';
// helper
import { requestProductDetailData, requestProductDescriptionData } from './helper/productDetailPage.helper';

// styles
import {
  Content,
  InformationContainer,
  ProductImage,
  MainInformation,
  MoreInformation,
  StatusLabel,
  TitleLabel,
  PriceLabel,
  ImageContainer,
  DescriptionTitle,
  DescriptionText
} from './productDetailPage.styled';

const ProductDetailPage = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(ProductDetailPageContext);
  const { isProductDetailError, isProductDetailFetching, productDetail, productDescription } = state;
  const productId = router.query?.id as string;
  useEffect(() => {
    requestProductDetailData(productId, dispatch);
    requestProductDescriptionData(productId, dispatch)
  }, []);

  if(isProductDetailFetching) return <Loading />;
  if(isProductDetailError) return <span>Error</span>;
  if(!productDetail) return null;

  return (
    <PageContent breadcrumb={[
      { text: 'Pagina principal', route: HOME_ROUTE },
      { text: productDetail.title },
    ]}>
      <Head>
        <title>Mercado Libre - {productDetail.title}</title>
        <meta property="og:title" content={'Mercado Libre - ' + productDetail.title} key="title" />
        <meta name="description" content={productDescription.substring(0, 100)} key="description"/>
      </Head>
      <Content>
        <InformationContainer>
          <ImageContainer>
            <ProductImage src={productDetail.image} alt={productDetail.title} isVertical={productDetail.isVerticalImage} />
            <MoreInformation>
              <DescriptionTitle>Descripción del producto</DescriptionTitle>
              <DescriptionText>
                {productDescription && productDescription}
              </DescriptionText>
            </MoreInformation>
          </ImageContainer>

          <MainInformation>
            <StatusLabel>{`${productDetail.condition} - ${productDetail.soldQuantity} vendidos`}</StatusLabel>
            <TitleLabel>{productDetail.title}</TitleLabel>
            <PriceLabel>
              {formatNumber(productDetail.price.amount, {
                currency: productDetail.price.currency,
                style: 'currency',
                minimumFractionDigits: productDetail.price.decimals
              })}
            </PriceLabel>
            <Button color="secondary" size="big" fullWidth onClick={() => {}} >
              Comprar
            </Button>
          </MainInformation>
        </InformationContainer>
      </Content>
    </PageContent>
  )
}

export default ProductDetailPage;
