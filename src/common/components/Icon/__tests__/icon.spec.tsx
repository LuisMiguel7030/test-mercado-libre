// vendors
import React from 'react';

// componentes
import Icon from '../Icon';
import Image from 'next/image';

// utils
import { mountWithContext } from '../../../test-utils/mountWithContext';
import { ReactWrapper } from 'enzyme';

// helper
import { getIconName } from '../icon.helper';

jest.mock('next/image', () => () => <div />);
jest.mock('../icon.helper')

let props = {
  icon: 'mock-icon',
  alt: 'mock-alt',
  isLarge: false,
  width: 100,
  height: 100
};

describe('Icon', () => {
  let wrapper: ReactWrapper;
  let mockProps;

  it('should render correctly', () => {
    wrapper = mountWithContext(<Icon {...props}/>);
    expect(wrapper.find(Image)).toHaveLength(1);
  });

  describe('when have url prop', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      mockProps = {...props, ...{ url: 'www.mock.com' }}
      wrapper = mountWithContext(<Icon {...mockProps}/>);
    });

    it('should get url', () => {
      expect(wrapper.find(Image).prop('src')).toEqual('www.mock.com');
    });
  });

  describe('when have icon name prop', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(<Icon {...props}/>);
    });

    it('should get asset icon', () => {
      expect(getIconName).toHaveBeenCalled();
    });
  });
});