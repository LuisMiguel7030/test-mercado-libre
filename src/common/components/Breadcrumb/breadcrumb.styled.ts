import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & a, span {
    font-size: ${({ theme }) => theme.fontSize.xxSmall};
    color: ${({ theme }) => theme.colors.gray2};
    margin-right: ${({ theme }) => theme.spaces.xxs};
  }
  & a {
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.gray3};
    }
  }

  & > li:last-child {
    font-weight: bold;
  }

  & > li::after {
    content: '';
    display: inline-block;
    box-sizing: border-box;
    width: ${({ theme }) => theme.spaces.xs};
    height: ${({ theme }) => theme.spaces.xs};
    border-bottom: 1px solid;
    border-right: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray2};
    transform: rotate(-45deg);
    margin-right: ${({ theme }) => theme.spaces.xs};
  }

  & > li:last-child::after {
    display: none;
  }
`;
List.displayName = 'List';

