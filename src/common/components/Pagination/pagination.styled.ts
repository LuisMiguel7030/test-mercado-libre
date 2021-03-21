import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;
Container.displayName = 'Container';

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 ${({ theme }) => theme.spaces.s};
`;
List.displayName = 'List';

export const Item = styled.li<{isSelect?: boolean}>`
  width: ${({ theme }) => theme.spaces.l};
  height: ${({ theme }) => theme.spaces.l};
  border-radius: ${({ theme }) => theme.spaces.xxs};
  margin: 0 ${({ theme }) => theme.spaces.xxs};
  background-color: ${({ isSelect, theme }) => isSelect && 'rgba(0,0,0, .07)'};

  & a, button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: ${({ isSelect, theme }) => (isSelect) ? theme.colors.gray4 : theme.colors.gray2};
    font-weight: ${({ isSelect }) => (isSelect) && 'bold'};
  }

  &:hover {
    background-color: rgba(0,0,0, .07);
  }
`;
Item.displayName = 'Item';

export const NavigationItem = styled.li`
  border-radius: ${({ theme }) => theme.spaces.xxs};
  margin: 0 ${({ theme }) => theme.spaces.xxs};

  & a, button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray2};
    padding: ${({ theme }) => theme.spaces.xs};
  }

  &:hover {
    background-color: rgba(0,0,0, .07);
  }
`;
NavigationItem.displayName = 'NavigationItem';