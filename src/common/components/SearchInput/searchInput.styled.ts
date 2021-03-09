import styled from 'styled-components';

export const SerachContainer = styled.div`
  display: flex;
  flex: 1;
  height: ${({ theme }) => theme.spaces.xl};
  width: 100%;
`;
SerachContainer.displayName = 'SerachContainer';

export const FieldContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-top-left-radius: ${({ theme }) => theme.spaces.xxs};
  border-bottom-left-radius: ${({ theme }) => theme.spaces.xxs};
  padding: 0 ${({ theme }) => theme.spaces.xs};
  width: 100%;
`;
FieldContainer.displayName = 'FieldContainer';

export const Field = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.small};
  width: 100%;

  &:focus {
    outline: none;
  }
`;
Field.displayName = 'Field';

export const Button = styled.button`
  height: 100%;
  width: ${({ theme }) => theme.spaces.xl};
  border: none;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 0;
  border-top-right-radius: ${({ theme }) => theme.spaces.xxs};
  border-bottom-right-radius: ${({ theme }) => theme.spaces.xxs};
`;
Button.displayName = 'Button';
