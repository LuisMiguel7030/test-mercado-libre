import styled from 'styled-components';

export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spaces.l};
  border-radius: ${({ theme }) => theme.spaces.xxs}
`;
Content.displayName = 'Content';

export const ImageContainer = styled.div`
  width: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
ImageContainer.displayName = 'ImageContainer';

export const ProductImage = styled.img<{isVertical: boolean}>`
  width: ${({ isVertical }) => isVertical ? '400px' : '680px'};
  max-width: 100%;
  height: auto;
`;
ProductImage.displayName = 'ProductImage';

export const InformationContainer = styled.div`
  display: flex;
  width: 100%;
`;
InformationContainer.displayName = 'InformationContainer';

export const MainInformation = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: ${({ theme }) => theme.spaces.s};
`;
MainInformation.displayName = 'MainInformation';

export const MoreInformation = styled.div`
  width: 100%;
`;
MainInformation.displayName = 'MainInformation';

export const StatusLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxSmall};
  color: ${({ theme }) => theme.colors.gray4};
  margin-bottom: ${({ theme }) => theme.spaces.s};
`;
StatusLabel.displayName = 'StatusLabel';

export const TitleLabel = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: ${({ theme }) => theme.colors.gray4};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spaces.l};
`;
TitleLabel.displayName = 'TitleLabel';

export const PriceLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  color: ${({ theme }) => theme.colors.gray4};
  margin-bottom: ${({ theme }) => theme.spaces.l};
`;
PriceLabel.displayName = 'PriceLabel';

export const DescriptionTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.gray4};
  font-weight: normal;
  margin-bottom: ${({ theme }) => theme.spaces.l};
`;
DescriptionTitle.displayName = 'DescriptionTitle';

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xSmall};
  color: ${({ theme }) => theme.colors.gray2};
  line-height: ${({ theme }) => theme.spaces.m};
`;
DescriptionTitle.displayName = 'DescriptionTitle';