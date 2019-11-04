import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const ProductsContainer = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 30px 0;
  flex-direction: row;
  height: 100%;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  max-height: 400px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
  justify-content: flex-start;
  &:first-child {
    margin-left: 50px;
  }
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 200px;
  height: 200px;
`;

export const ProductData = styled.View``;

export const ProductTitle = styled.Text`
  font-size: 20px;
`;

export const ProductPrice = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const ProductButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  flex-direction: row;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductButtonAmount = styled.View`
  flex-direction: row;
  padding: 5px;
  background: rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

export const ProductButtonAmountText = styled.Text`
  color: #fff;
`;

export const ProductButtonText = styled.Text`
  color: #fff;
  padding: 10px;
  text-align: center;
  flex: 1;
`;
