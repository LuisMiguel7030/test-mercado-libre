// vendors
import React from 'react';
// componentes
import SearchPageProvider from '../searchPage.provider';
import SearchPage from '../../SearchPage';
// utils
import { mountWithContext } from '../../../../common';
import { ReactWrapper } from 'enzyme';

jest.mock('../../SearchPage', () => () => <div />)

describe('SearchPageProvider', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(<SearchPageProvider />);
    expect(wrapper.find(SearchPage)).toHaveLength(1);
  });
});