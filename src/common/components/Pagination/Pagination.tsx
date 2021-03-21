// vendors
import React, { ReactNode } from 'react';
// components
import Repeat from '../Repeat/Repeat';
// styles
import { Container, List, Item, NavigationItem } from './pagination.styled';

type Props = {
  //** total items */
  count: number,
  //** number of pages */
  boundaryCount?: number
  //** render next button */
  nextLink?: (nextIndex: number) => ReactNode,
  //** render prev button */
  prevLink?: (prevIndex: number) => ReactNode
  //** render item */
  itemLink: (index: number) => ReactNode,
  //** current page */
  page: number,
  //** restyle container */
  className?: string
}

const Pagination = ({ count, boundaryCount, nextLink, prevLink, itemLink, page, className }: Props) => {
  const countValue = count - 1;
  const itemsLegnth = (countValue < boundaryCount) ? countValue : boundaryCount;
  const middlePage = Number((boundaryCount / 2).toFixed());
  const newPageValue = (page > middlePage) && page - middlePage;
  const hidePrevLink = (page === 0);
  const hideNextLink = (page >= countValue);

  return (
    <Container className={className} >
      <List>
        {!hidePrevLink && <NavigationItem>{prevLink(page - 1)}</NavigationItem>}
        <Repeat numTimes={itemsLegnth}>
          {(indexValue) => {
            const indexPage = indexValue + newPageValue;
            if(indexPage > countValue) return null;
            return (
              <Item isSelect={page === indexPage} key={indexPage}>
                {itemLink(indexPage)}
              </Item>
            )
          }}
        </Repeat>
        {!hideNextLink && <NavigationItem>{nextLink(page + 1)}</NavigationItem>}
      </List>
    </Container>
  );
};

Pagination.defaultProps = {
  boundaryCount: 10
};

export default Pagination;
