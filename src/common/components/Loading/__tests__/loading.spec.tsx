// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import Loading from '../Loading';
//utils
import { mountWithContext } from '../../../test-utils/mountWithContext';

jest.mock('next/link', () => () => <a />);

describe('Repeat', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(<Loading />);
    expect(wrapper.find('Circle')).toHaveLength(1);
  });
});