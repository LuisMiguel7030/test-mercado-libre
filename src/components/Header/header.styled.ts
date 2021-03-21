import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.spaces.headerHeight};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
HeaderContainer.displayName = 'HeaderContainer';

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
`;
Content.displayName = 'Content';

export const FormContainer = styled.form`
  margin-left: ${({ theme }) => theme.spaces.m};
  width: 100%;
`;
FormContainer.displayName = 'FormContainer';
