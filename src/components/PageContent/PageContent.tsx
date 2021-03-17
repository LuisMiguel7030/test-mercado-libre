// vendors
import React, { ReactElement, ReactNode } from 'react';
// components
import { Breadcrumb } from '../../common';
// styled
import { Content, BreadcrumbContainer} from './PageContent.styled';

type Props = {
  //** react children */
  children: ReactNode,
  //** breadcrumb content */
  breadcrumb: Array<{
    text: string,
    route?: string
  }>
};

const PageContent = ({ children, breadcrumb }: Props): ReactElement => {
  return (
    <Content>
      <BreadcrumbContainer>
        <Breadcrumb content={breadcrumb} />
      </BreadcrumbContainer>
      {children}
    </Content>
  );
};

export default PageContent;