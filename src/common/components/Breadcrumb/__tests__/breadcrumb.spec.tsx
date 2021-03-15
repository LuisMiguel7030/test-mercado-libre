// vendors
import React, { ComponentProps } from 'react';

// componentes
import Breadcrumb from '../Breadcrumb';
import Link from 'next/link';

// utils
import { mountWithContext } from '../../../test-utils/mountWithContext';
import { ReactWrapper } from 'enzyme';

jest.mock('next/link', () => () => <a />)

describe('Breadcrumb', () => {
  let wrapper: ReactWrapper;
  let mockProps: ComponentProps<typeof Breadcrumb>;

  it('should render correctly all links', () => {
    mockProps = {
      content: [
        { text: 'Electronica', route: '/' },
        { text: 'Ipod', route: '/' },
        { text: '35gb', route: '/' },
      ]
    };
    wrapper = mountWithContext(<Breadcrumb {...mockProps} />);
    expect(wrapper.find(Link)).toHaveLength(3);
  });

  it('should render span without route prop', () => {
    mockProps = {
      content: [
        { text: 'Electronica', route: '/' },
        { text: 'Ipod', route: '/' },
        { text: '35gb'},
      ]
    };
    wrapper = mountWithContext(<Breadcrumb {...mockProps} />);
    expect(wrapper.find(Link)).toHaveLength(2);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});