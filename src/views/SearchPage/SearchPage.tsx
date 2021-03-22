// vendors
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head'
// helper
import { requestSearchData } from './helper/searchPage.helper';
// context
import { SearchPageContext } from './context/searchPage.context';
// components
import PageContent from '../../components/PageContent/PageContent';
import BuildProductCard from './components/BuildProductCard/BuildProductCard';
import { Pagination, Loading } from '../../common';
// constants
import { HOME_ROUTE, SEARCH_ROUTE } from '../../constants/routes';
import { PRODUCTS_LIMIT } from './constants/searchPage.constants';
// styles
import { CardList, PaginationContainer } from './searchPage.styled';
// interface
import { InitialState } from './interface/searchPage.interface';

function SearchPage(): JSX.Element {
  const router = useRouter();
  const { state, dispatch } = useContext<{state: InitialState, dispatch: Function}>(SearchPageContext);
  const { isSearchFetching, products, isSearchError, totalProducts } = state;
  const searchParam = router.query?.search as string;
  const pageParam = (router.query?.page || '0') as string;
  const buildPaginationUrl = (page: number): string => `${SEARCH_ROUTE}?search=${searchParam}&page=${page}`;
  const totalPages = Math.abs(totalProducts / PRODUCTS_LIMIT) + 1;

  useEffect(() => {
    if(searchParam) requestSearchData(searchParam, pageParam, dispatch);
  }, [searchParam, pageParam]);

  if (isSearchFetching) return <Loading />;
  if (isSearchError) return <span>Error</span>
  if (products.length === 0) return null;

  return (
    <PageContent breadcrumb={[
      { text: 'Pagina principal', route: HOME_ROUTE },
      { text: searchParam },
    ]}>
      <Head>
        <title>Mercado Libre - Busca tu producto</title>
        <meta property="og:title" content="Mercado Libre - Busca tu producto " key="title" />
      </Head>
      <CardList>
        {products.map((item) => <BuildProductCard product={item} key={item.id}/>)}
      </CardList>
      <PaginationContainer>
        <Pagination
          count={totalPages}
          prevLink={(prevIndex) => <Link href={buildPaginationUrl(prevIndex)} passHref><a>Anterior</a></Link>}
          nextLink={(nextIndex) => <Link href={buildPaginationUrl(nextIndex)} passHref><a>Siguiente</a></Link>}
          itemLink={(index) => <Link href={buildPaginationUrl(index)} passHref><a>{index + 1}</a></Link>}
          page={Number(pageParam)}
        />
      </PaginationContainer>
    </PageContent>
  );
};

export default SearchPage;