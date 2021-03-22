// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import PageContent from '../PageContent';
//utils
import { Breadcrumb, mountWithContext } from '../../../common';

jest.mock('next/link', () => () => <a />);

describe('PageContent', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(
      <PageContent
        breadcrumb={[
          { text: 'mock', route: '/' }
        ]}
      >
        mock
      </PageContent>
    );
    expect(wrapper.find(Breadcrumb)).toHaveLength(1);
  });
});