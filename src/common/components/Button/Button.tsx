import React, { MouseEvent, ReactElement, ReactNode } from 'react';
// styled
import { ButtonContainer, ButtonLink } from './button.styled';

type Props = {
  variant?: 'default' | 'text' | 'ghost',
  color?: 'primary' | 'secondary' | 'white'
  fullWidth?: boolean,
  className?: string,
  href?: string,
  onClick: (event: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLAnchorElement>) => void,
  size?: 'small' | 'medium' | 'big',
  children: ReactNode,
};

const Button = (props: Props):ReactElement => {
  const {
    className,
    href,
    onClick,
    variant,
    size,
    fullWidth,
    children,
    color
  } = props;

  const getButtonProps = () => ({
    className: className,
    variant: variant,
    color: color,
    size: size,
    fullWidth: fullWidth,
    onClick: onClick
  })

  if (href) {
    return (
      <ButtonLink {...getButtonProps()} href={href}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <ButtonContainer {...getButtonProps()}>
      {children}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  className: '',
  variant: 'default',
  color: 'primary',
  fullWidth: false,
  href: null,
  size: 'medium',
};

export default Button;
