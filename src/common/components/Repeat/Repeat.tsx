// vendors
import React, { ReactNode } from 'react';

type Props = {
  //** number of render */
  numTimes: number,
  //** react children */
  children: (index: number) => ReactNode
}
const Repeat = ({ numTimes, children }: Props) => {
  let items = [];
  for (let i = 0; i < numTimes; i++) {
    items.push(children(i));
  }

  return (
    <>{items}</>
  );
};

export default Repeat;
