import styled from 'styled-components';
import ContainerHandler from '../ContainerHandler/ContainerHandler';

export const Container = styled.div`
  display: flex;
  padding-bottom: ${({ theme }) => theme.spaces.s};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
`;
Container.displayName = 'Container';

export const InformationContainer = styled.div`
  flex-grow: 2;
  margin-left: ${({ theme }) => theme.spaces.s};
  color: ${({ theme }) => theme.colors.gray4};
`;
InformationContainer.displayName = 'InformationContainer';

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.s};
  margin-bottom: ${({ theme }) => theme.spaces.l};
`;
PriceContainer.displayName = 'PriceContainer';

export const Price = styled.span`
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin-right: ${({ theme }) => theme.spaces.xs};
`;
Price.displayName = 'Price';

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
Title.displayName = 'Title';

export const Condition = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small};
`;
Condition.displayName = 'Condition';

export const Location = styled.div`
  width: 20%;
  font-size: ${({ theme }) => theme.fontSize.xxxSmall};
  color: ${({ theme }) => theme.colors.gray2};
  margin-top: ${({ theme }) => theme.spaces.xl};
`;
Location.displayName = 'Location';

export const ProductImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: ${({ theme }) => theme.spaces.xxs};
`;
ProductImage.displayName = 'ProductImage';

export const ContainerHandlerStyled = styled(ContainerHandler)`
  text-decoration: none;

  &:active {
    text-decoration: underline blue;
  }
`;
ContainerHandlerStyled.displayName = 'ContainerHandlerStyled';
