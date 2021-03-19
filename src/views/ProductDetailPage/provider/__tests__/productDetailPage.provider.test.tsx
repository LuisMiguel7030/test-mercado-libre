// vendors
import React from 'react';

// componentes
import ProductDetailPageProvider from '../productDetailPage.provider';
import ProductDetailPage from '../../ProductDetailPage';

// utils
import { mountWithContext } from '../../../../common';
import { ReactWrapper } from 'enzyme';

jest.mock('../../ProductDetailPage', () => () => <div />)

describe('ProductDetailPageProvider', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(<ProductDetailPageProvider />);
    expect(wrapper.find(ProductDetailPage)).toHaveLength(1);
  });
});