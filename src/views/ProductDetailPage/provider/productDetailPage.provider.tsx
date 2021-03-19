// vendors
import React from 'react';
// provider
import { ProductDetailPageProvider } from '../context/productDetailPage.context';
// components
import ProductDetailPage from '../ProductDetailPage';

const HomePageContainerProvider = (): JSX.Element => {
  return (
    <ProductDetailPageProvider>
      <ProductDetailPage />
    </ProductDetailPageProvider>
  );
};

export default HomePageContainerProvider;
