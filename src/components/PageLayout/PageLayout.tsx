// vendors
import React, { ReactElement, ReactNode } from 'react';
// components
import { Header } from '../../common';
// styled
import { Wrapper } from './pageLayout.styled';

type Props = {
  children: ReactNode
};

const PageLayout = ({ children }: Props): ReactElement => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default PageLayout;
