// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import Repeat from '../Repeat';
//utils
import { mountWithContext } from '../../../test-utils/mountWithContext';

jest.mock('next/link', () => () => <a />);

describe('Repeat', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(
      <Repeat numTimes={3}>
        {(index) => <div id={index.toString()} key={index}/>}
      </Repeat>
    );
    expect(wrapper).not.toBeNull();
  });

  describe('When have 4 numTimes prop', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <Repeat numTimes={3}>
          {(index) => <div id={index.toString()} key={index}/>}
        </Repeat>
      );
    });

    it('should render 4 items', () => {
      expect(wrapper.find('div')).toHaveLength(3);
      wrapper.find('div').forEach((element, index) => {
        expect(element.prop('id')).toEqual(index.toString())
      });
    });
  });
});