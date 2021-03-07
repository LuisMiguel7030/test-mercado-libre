// vendors
import React from 'react';

// components
import Image from 'next/image';

// helper
import { getIconName } from './icon.helper';

type Props = {
  //** icon name */
  icon: string,
  //** icon alt */
  alt: string,
  //** icon size */
  islarge?: boolean,
  //** icon url */
  url?: string,
  //** icon width */
  width: string | number,
  //** icon height */
  height: string | number
}

const Icon = (props: Props): JSX.Element => {
  const {
    icon,
    alt,
    islarge,
    url,
    width,
    height
  } = props;
  const iconName = url || getIconName(icon, islarge);

  return (
    <Image
      src={iconName}
      alt={alt}
      objectFit="none"
      width={width}
      height={height}
    />
  );
};

Icon.defaultProps = {
  islarge: false,
};

export default Icon;