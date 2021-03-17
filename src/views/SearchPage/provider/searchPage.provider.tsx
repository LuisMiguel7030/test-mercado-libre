// vendors
import React from 'react';
// provider
import { SearchPageProvider } from '../context/searchPage.context';
// components
import HomePage from '../SearchPage';

const HomePageContainerProvider = (): JSX.Element => {
  return (
    <SearchPageProvider>
      <HomePage />
    </SearchPageProvider>
  );
};

export default HomePageContainerProvider;
