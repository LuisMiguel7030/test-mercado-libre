import styled from 'styled-components';

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background: transparent;
  border: ${({ theme }) => theme.spaces.xs} solid transparent;
  border-radius: 50%;
  border-top: ${({ theme }) => theme.spaces.xs} solid ${({ theme }) => theme.colors.primary};
  border-left: ${({ theme }) => theme.spaces.xs} solid ${({ theme }) => theme.colors.primary};
  animation: animate 1s infinite linear;

  @keyframes animate{
    0%{
        transform: translate(-50%,-50%) rotate(0deg);
    }
    100%{
        transform: translate(-50%,-50%) rotate(360deg);
    }
  }
`;
Circle.displayName = 'Circle';