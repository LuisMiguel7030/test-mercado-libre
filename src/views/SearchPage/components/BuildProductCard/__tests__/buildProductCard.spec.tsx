// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import BuildProductCard from '../BuildProductCard';
//utils
import { mountWithContext } from '../../../../../common';
// mock
import { mockProductsData } from '../../../mock/searchPage.mock';
// constants
import { DETAIL_ROUTE } from '../../../../../constants/routes';

jest.mock('next/link', () => () => <a />);

describe('BuildProductCard', () => {
  let wrapper: ReactWrapper;
  let mockProduct;

  it('should render correctly', () => {
    wrapper = mountWithContext(<BuildProductCard product={mockProductsData[0]}/>);
    expect(wrapper).not.toBeNull();
  });

  describe('When render', () => {
    const productId = 'M001'

    beforeEach(() => {
      jest.resetAllMocks();
      mockProduct = { ...mockProductsData[0], id: productId };
      wrapper = mountWithContext(<BuildProductCard product={mockProduct}/>);
    });

    it('should buld correct url item link', () => {
      expect(wrapper.find('ProductSearchCard').prop('href')).toEqual(DETAIL_ROUTE.replace(':id', productId));
    });
  });
});