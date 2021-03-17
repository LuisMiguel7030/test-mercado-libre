import styled from 'styled-components';

export const Content = styled.div`
  @media screen and (min-width: 1200px) {
    width: 1200px;
    margin: 0 auto;
  }
`;
Content.displayName = 'Content';

export const BreadcrumbContainer = styled.div`
  padding: ${({ theme }) => theme.spaces.s} 0;
`;
BreadcrumbContainer.displayName = 'BreadcrumbContainer';