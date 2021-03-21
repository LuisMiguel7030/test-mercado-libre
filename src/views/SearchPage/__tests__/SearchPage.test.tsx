// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import SearchPage from '../SearchPage';
//utils
import { mountWithContext } from '../../../common';
//context
import { SearchPageContext } from '../context/searchPage.context';
// interface
import { InitialState } from '../interface/searchPage.interface';
// mock
import { mockProductsData } from '../mock/searchPage.mock';
// constatns
import { SEARCH_ROUTE } from '../../../constants/routes';

const dispatch = jest.fn();

jest.mock('next/link', () => ({href}) => <a href={href}/>);
jest.mock('../../../common', () => {
  const realtModule = jest.requireActual('../../../common');
  return {
    ...realtModule,
    formatNumber: jest.fn()
  }
});
jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      query: {
        search: 'bmw',
        page: 3,
      }
    }),
  }
});

const defaultState = {
  isSearchFetching: false,
  isSearchError: false,
  searchError: '',
  products: [],
  totalProducts: null
};

const render = (state: InitialState): ReactWrapper => {
  return mountWithContext(
    <SearchPageContext.Provider value={{ state, dispatch}}>
      <SearchPage />
    </SearchPageContext.Provider>
  );
};

describe('SearchPageContext', () => {
  let wrapper: ReactWrapper;
  let mockState: InitialState;

  it('should render correctly', () => {
    wrapper = render(defaultState);
    expect(wrapper).not.toBeNull();
  });

  describe('When is fetching', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      mockState = { ...defaultState, ...{
        isSearchFetching: true
      }}
      wrapper = render(mockState);
    });

    it('should render loading component', () => {
      expect(wrapper.find('Loading')).toHaveLength(1);
    });
  });

  describe('When is error response', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      mockState = { ...defaultState, ...{
        isSearchError: true,
        searchError: 'Error',
      }}
      wrapper = render(mockState);
    });

    it('should render error component', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });
  });

  describe('When service is successfully', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      mockState = { ...defaultState, ...{
        totalProducts: 10,
        products: mockProductsData,
      }}
      wrapper = render(mockState);
    });

    it('should render correct components', () => {
      expect(wrapper.find('PageContent')).toHaveLength(1);
      expect(wrapper.find('BuildProductCard')).toHaveLength(2);
    });
  });

  describe('When render pagination', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      mockState = { ...defaultState, ...{
        totalProducts: 10,
        products: mockProductsData,
      }}
      wrapper = render(mockState);
    });

    it('should display component', () => {
      expect(wrapper.find('Pagination')).toHaveLength(1);
    });
    it('should build correct prev link url', () => {
      expect(wrapper.find('PaginationContainer a').at(0).prop('href')).toEqual(`${SEARCH_ROUTE}?search=bmw&page=2`);
    });
    it('should build correct first page link url', () => {
      expect(wrapper.find('PaginationContainer a').at(1).prop('href')).toEqual(`${SEARCH_ROUTE}?search=bmw&page=0`);
    });
    it('should build correct netx link url', () => {
      expect(wrapper.find('PaginationContainer a').last().prop('href')).toEqual(`${SEARCH_ROUTE}?search=bmw&page=4`);
    });
  });
});
