import styled from 'styled-components';

export const CardList = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spaces.s} ${({ theme }) => theme.spaces.s} 0;
  border-radius: ${({ theme }) => theme.spaces.xxs}
`;
CardList.displayName = 'CardList';

export const CardItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.s};
`;
CardItem.displayName = 'CardItem';