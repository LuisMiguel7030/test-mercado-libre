// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import Button from '../Button';
//utils
import { mountWithContext } from '../../../test-utils/mountWithContext';

jest.mock('next/link', () => () => <a />);

describe('Button Component', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(
      <Button
        color="secondary"
        size="big"
        fullWidth onClick={() => {}}
      >
        Text
      </Button>
    );
    expect(wrapper).not.toBeNull();
  });

  describe('When hava href prop', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <Button
          color="secondary"
          size="big"
          fullWidth onClick={() => {}}
          href="www.mock.com"
        >
          Text
        </Button>
      );
    });

    it('should render a link', () => {
      expect(wrapper.find('ButtonLink')).toHaveLength(1);
      expect(wrapper.find('a')).toHaveLength(1);
    });
  });

  describe('When hava not href prop', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <Button
          color="secondary"
          size="big"
          fullWidth onClick={() => {}}
        >
          Text
        </Button>
      );
    });

    it('should render a button', () => {
      expect(wrapper.find('ButtonContainer')).toHaveLength(1);
      expect(wrapper.find('button')).toHaveLength(1);
    });
  });
});