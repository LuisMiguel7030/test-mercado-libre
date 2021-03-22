// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import PageLayout from '../PageLayout';
import Header from '../../Header/Header';
//utils
import { mountWithContext } from '../../../common';

jest.mock('next/link', () => () => <a />);
jest.mock('../../Header/Header', () => () => <div />);

describe('PageLayout', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(
      <PageLayout>
        home
      </PageLayout>
    );
    expect(wrapper.find(Header)).toHaveLength(1);
  });
});