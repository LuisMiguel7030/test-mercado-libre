// vendors
import React, { ComponentProps } from 'react';

// componentes
import ProductSearchCard from '../ProductSearchCard';
import { Icon } from '../../../common';
// utils
import { mountWithContext } from '../../../common';
import { ReactWrapper } from 'enzyme';

jest.mock('../../ContainerHandler/ContainerHandler', () => ({ children }) => (<div>{children}</div>))
jest.mock('../../../common/components/Icon/Icon', () => () => <div />);

const defaultMockProps = {
   title: 'mock title',
   isFreeShipping: false,
   condition: 'mock condition',
   location: 'mock location',
   price: {
     currency: 'COP',
     amount: 20000,
     decimals: 2
   },
   img: {
     url: 'www.mock.com',
     alt: 'mock alt'
   },
   href: '/item',
   handleClick: jest.fn()
};

describe('ProductSearchCard', () => {
  let wrapper: ReactWrapper;
  let mockProps: ComponentProps<typeof ProductSearchCard>;

  it('should render with correct props', () => {
    mockProps = defaultMockProps;
    wrapper = mountWithContext(<ProductSearchCard {...mockProps} />);
    expect(JSON.stringify(wrapper.find(ProductSearchCard).props())).toEqual(JSON.stringify(defaultMockProps));
  });

  describe('when is free shipping', () => {
    beforeEach(() => {
      mockProps = { ...defaultMockProps, ...{ isFreeShipping: true }}
      wrapper = mountWithContext(<ProductSearchCard {...mockProps} />);
    });

    it('should render icon', () => {
      expect(wrapper.find(Icon).prop('icon')).toEqual('ic_shipping');
    });
  })
});
