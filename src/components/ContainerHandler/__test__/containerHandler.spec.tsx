// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import ContainerHandler from '../ContainerHandler';
//utils
import { mountWithContext } from '../../../common';

jest.mock('next/link', () => () => <a />);

describe('ContainerHandler', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(
      <ContainerHandler
        href="www.mock.com"
        onClick={() => {}}
      >
        mock
      </ContainerHandler>
    );
    expect(wrapper).not.toBeNull();
  });

  describe('When have href prop', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <ContainerHandler
          href="www.mock.com"
          onClick={() => {}}
        >
          mock
        </ContainerHandler>
      );
    });

    it('should render link component', () => {
      expect(wrapper.find('a')).toHaveLength(1);
    });
  });

  describe('When have not href prop', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <ContainerHandler
          onClick={() => {}}
        >
          mock
        </ContainerHandler>
      );
    });

    it('should render container', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });
  });
});