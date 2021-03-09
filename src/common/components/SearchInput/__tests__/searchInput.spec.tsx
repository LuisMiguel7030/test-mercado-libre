// vendors
import React from 'react';

// componentes
import SearchInput from '../SearchInput';

// utils
import { mountWithContext } from '../../../test-utils/mountWithContext';
import { ReactWrapper } from 'enzyme';

jest.mock('../../Icon/Icon', () => () => <div />)

const mockProps = {
  placeholder: 'mock placeholder',
  ariaLabel: 'mock ariaLabel',
  name: 'mockName',
  value: 'mockValue',
  handleChange: jest.fn(),
  handleClick: jest.fn()
};

describe('Header', () => {
  let wrapper: ReactWrapper;

  it('should render with correct props', () => {
    wrapper = mountWithContext(<SearchInput {...mockProps} />);
    expect(JSON.stringify(wrapper.find(SearchInput).props())).toEqual(JSON.stringify({
      placeholder: 'mock placeholder',
      ariaLabel: 'mock ariaLabel',
      name: 'mockName',
      value: 'mockValue',
      handleChange: jest.fn(),
      handleClick: jest.fn()
    }));
  });
});
