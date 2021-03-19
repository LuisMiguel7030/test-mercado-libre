// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';

// components
import ProductDetailPage from '../ProductDetailPage';
//utils
import { mountWithContext, formatNumber } from '../../../common';
//context
import { ProductDetailPageContext } from '../context/productDetailPage.context';
// interface
import { InitialState } from '../interface/productDetailPage.interface';
// mock
import { productDetailStateData } from '../mock/productDetailPage.mock';

const dispatch = jest.fn();

jest.mock('next/link', () => () => <a />);
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
      query: 'M123'
    }),
  }
});

const defaultState = {
  isProductDetailFetching: false,
  isProductDetailError: false,
  productDetailError: '',
  productDetail: null,
  isProductDescriptionFetching: false,
  isProductDescriptionError: false,
  productDescriptionError: '',
  productDescription: null
};

const render = (state: InitialState): ReactWrapper => {
  return mountWithContext(
    <ProductDetailPageContext.Provider value={{ state, dispatch}}>
      <ProductDetailPage />
    </ProductDetailPageContext.Provider>
  );
};

describe('InvestmentSimulator', () => {
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
        isProductDetailFetching: true
      }}
      wrapper = render(mockState);
    });

    it('should render loading component', () => {
      expect(wrapper.find('span')).toHaveLength(1);
    });
  });

  describe('When is error service', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      mockState = { ...defaultState, ...{
        isProductDetailError: true,
        productDetailError: 'Error',
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
        productDetail: productDetailStateData,
      }}
      wrapper = render(mockState);
    });

    it('should render correct components', () => {
      expect(wrapper.find('PageContent')).toHaveLength(1);
      expect(wrapper.find('MainInformation')).toHaveLength(1);
    });
    it('should call correct format number', () => {
      expect(formatNumber).toHaveBeenCalledWith( 122,{
        currency: 'COP',
        style: 'currency',
        minimumFractionDigits: 0
      });
    });
  });

  // describe('', () => {
  //   beforeEach(() => {
  //     jest.resetAllMocks();
  //     mockState = { }
  //     wrapper = render()
  //   });

  //   it('', () => {

  //   });
  // });
});
