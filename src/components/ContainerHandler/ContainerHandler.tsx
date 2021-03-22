// vendors
import React, { ReactNode } from 'react';
import Link from 'next/link';

type Props = {
  //** class name container */
  className?: string,
  //** React node */
  children: ReactNode,
  //** url link */
  href?: string,
  //** onClick action */
  onClick: () => void,
};

const ContainerHandler = ({ className, children, href, onClick }: Props): JSX.Element => {
  if(href) return (
    <Link href={href} passHref>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
  return <div className={className} onClick={onClick} >{children}</div>;
};

export default ContainerHandler;