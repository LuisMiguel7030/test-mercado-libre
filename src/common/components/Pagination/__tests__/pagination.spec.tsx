// vendors
import React from 'react';
import { ReactWrapper } from 'enzyme';
// components
import Pagination from '../Pagination';
//utils
import { mountWithContext } from '../../../test-utils/mountWithContext';

jest.mock('next/link', () => () => <a />);

describe('Pagination', () => {
  let wrapper: ReactWrapper;

  it('should render correctly', () => {
    wrapper = mountWithContext(
      <Pagination
        count={15}
        boundaryCount={10}
        page={0}
        nextLink={() => <a />}
        prevLink={() => <a />}
        itemLink={() => <a />}
      />
    );
    expect(wrapper).not.toBeNull();
  });

  describe('When count is less than boundaryCount', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <Pagination
          count={4}
          boundaryCount={10}
          page={0}
          nextLink={() => <a id='next'/>}
          prevLink={() => <a id='prev'/>}
          itemLink={() => <a id={`item`}/>}
        />
      );
    });

    it('should render count items', () => {
      expect(wrapper.find('#item')).toHaveLength(3);
    });
  });

  describe('When the first item is selected', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <Pagination
          count={4}
          boundaryCount={10}
          page={0}
          nextLink={() => <a id='next'/>}
          prevLink={() => <a id='prev'/>}
          itemLink={() => <a id={`item`}/>}
        />
      );
    });

    it('should hide prev link component', () => {
      expect(wrapper.find('#prev')).toHaveLength(0);
      expect(wrapper.find('#next')).toHaveLength(1);
    });
    it('should be selected the first item', () => {
      expect(wrapper.find('Item').at(0).prop('isSelect')).toBeTruthy();
    });
  });

  describe('When the last item is selected', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <Pagination
          count={12}
          boundaryCount={10}
          page={11}
          nextLink={() => <a id="next"/>}
          prevLink={() => <a id="prev"/>}
          itemLink={() => <a id="item"/>}
        />
      );
    });

    it('should hide next link component', () => {
      expect(wrapper.find('#prev')).toHaveLength(1);
      expect(wrapper.find('#next')).toHaveLength(0);
    });
    it('should be selected the last item', () => {
      expect(wrapper.find('Item').at(5).prop('isSelect')).toBeTruthy();
    });
    it('should hide the next items', () => {
      expect(wrapper.find('#item')).toHaveLength(6);
    });
  });

  describe('When the page selected is greater than boundaryCount', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = mountWithContext(
        <Pagination
          count={20}
          boundaryCount={10}
          page={15}
          nextLink={() => <a id='next'/>}
          prevLink={() => <a id='prev'/>}
          itemLink={(index) => <a className="item" id={index.toString()}/>}
        />
      );
    });

    it('should move index pagination', () => {
      expect(wrapper.find('.item').at(0).prop('id')).toEqual('10');
    });
  });
});