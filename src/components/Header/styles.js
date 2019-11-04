import styled from 'styled-components/native';

import colors from '../../styles/colors';

import logo from '../../assets/logo.png';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const CartCounter = styled.Text`
  background-color: ${colors.primary};
  border-radius: 8px;
  width: 16px;
  height: 16px;
  font-size: 10px;
  line-height: 16px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: -8px;
  right: -8px;
  color: #fff;
`;
