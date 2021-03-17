// vendors
import React, { useEffect, useContext, ReactElement } from 'react';
import { useRouter } from 'next/router';
// helper
import { requestSearchData } from './helper/searchPage.helper';
// context
import { SearchPageContext } from './context/searchPage.context';
// components
import PageContent from '../../components/PageContent/PageContent';
import ProductSearchCard from '../../components/ProductSearchCard/ProductSearchCard';
// constants
import { DETAIL_ROUTE, HOME_ROUTE } from '../../constants/routes';
// styles
import { CardList, CardItem } from './searchPage.styled';
// interface
import { InitialState, ProductState } from './interface/searchPage.interface';

const buildProductCards = (productsList: Array<ProductState>): Array<ReactElement> => {
  let productCardComponentList = [];
  for (let index = 0; index < 4; index++) {
    const {
      id, title, image, condition, freeShipping, address, price
    } = productsList[index];
    const detailProductUrl = DETAIL_ROUTE.replace(':id', id);

    productCardComponentList.push(
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
    )
  }

  return productCardComponentList;
};

function SearchPage(): JSX.Element {
  const router = useRouter();
  const { state, dispatch } = useContext<{state: InitialState, dispatch: Function}>(SearchPageContext);
  const { isSearchFetching, products, isSearchError } = state;
  const querySearch = router.query?.search as string;

  useEffect(() => {
    requestSearchData(querySearch, dispatch);
  }, [querySearch]);

  if (isSearchFetching) return <span>Loading!!</span>
  if (isSearchError) return <span>Error</span>
  if (products.length === 0) return null;

  return (
    <PageContent breadcrumb={[
      { text: 'Pagina principal', route: HOME_ROUTE },
      { text: querySearch },
    ]}>
      <CardList>
        {buildProductCards(products)}
      </CardList>
    </PageContent>
  );
};

export default SearchPage;