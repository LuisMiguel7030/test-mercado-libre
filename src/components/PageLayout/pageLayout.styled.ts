import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  background-color: ${({ theme }) => theme.colors.backgroundPage};
`;
Wrapper.displayName = 'Wrapper';