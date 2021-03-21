import styled, { css } from 'styled-components';

type Props = {
  variant: string,
  fullWidth?: boolean,
  size: string,
  color: string
};

const TextButton = css<Props>`
  border: none;
  background-color: transparent;
  color: ${({ theme, color }) => theme.colors[color]};
`;

const GhostButton = css<Props>`
  border-color: ${({ theme, color }) => theme.colors[color]};;
  background-color: transparent;
  color: ${({ theme, color }) => theme.colors[color]};
`;

const SmallButton = css<Props>`
  font-size: ${({ theme }) => theme.fontSize.xxxSmall};
  padding: 0 12px;
  height: 24px;
`;

const MediumButton = css<Props>`
  font-size: ${({ theme }) => theme.fontSize.xxxSmall};
  padding: 0 14px;
  height: 36px;
`;

const BigButton = css<Props>`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  padding: 0 16px;
  height: 46px;
`;

const ButtonRoot = ({ theme, variant, fullWidth, size, color }) => css`
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: ${theme.spaces.xxs};
  background-color: ${theme.colors[color] || theme.colors.default};
  color: ${theme.colors.white};
  font-weight: normal;
  width: ${fullWidth && '100%'};
  min-width: 64px;
  ${(variant === 'text') && TextButton}
  ${(variant === 'ghost') && GhostButton}
  ${(size === 'small') && SmallButton}
  ${(size === 'medium') && MediumButton}
  ${(size === 'big') && BigButton}
`;

export const ButtonContainer = styled.button<Props>`
  ${ButtonRoot}
`;
ButtonContainer.displayName = 'ButtonContainer';

export const ButtonLink = styled.a<Props>`
  ${ButtonRoot}
`;
ButtonLink.displayName = 'ButtonLink';
