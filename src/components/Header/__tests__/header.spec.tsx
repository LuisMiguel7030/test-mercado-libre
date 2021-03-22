// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// componentes
import Header from '../Header';
import { SearchInput } from '../../../common';
// utils
import { mountWithContext } from '../../../common/test-utils/mountWithContext';
// constants
import { SEARCH_ROUTE } from '../../../constants/routes';

const mockPush = jest.fn();
jest.mock('next/link', () => () => <a />);
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush
  })
}));

describe('Header', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    mountWithContext(<Header />);
    expect.anything();
  });

  describe('When submit input', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(<Header />);
    });

    it('should redirect to search page', () => {
      const mockEvent = { target: { value: 'bmw' } } as React.ChangeEvent<HTMLInputElement>;;
      const mockedSubmitEvent = { preventDefault: jest.fn() }

      wrapper.find(SearchInput).invoke('handleChange')(mockEvent);
      wrapper.find('FormContainer').simulate('submit', mockedSubmitEvent);

      expect(mockPush).toHaveBeenCalledWith(`${SEARCH_ROUTE}?search=bmw`);
    });
  });
});
