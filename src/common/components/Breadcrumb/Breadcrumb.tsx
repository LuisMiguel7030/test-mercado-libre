// vendors
import React from 'react';

// components
import Link from 'next/link';

// styles
import { List } from './breadcrumb.styled';

type Props = {
  //** content breadcrumb */
  content: Array<{
    text: string,
    route?: string
  }>
}

const Breadcrumb = ({ content }: Props): JSX.Element => {

  const buildListItems = (): Array<JSX.Element> => content.map((item, index) => (
    <li key={`item-${index}`}>
      {item.route ? <Link href={item.route}>{item.text}</Link> : <span>{item.text}</span>}
    </li>
  ));

  return (
    <nav>
      <List>
        {buildListItems()}
      </List>
    </nav>
  );
};

export default Breadcrumb;
