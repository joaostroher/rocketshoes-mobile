import styled from 'styled-components/native';

export const CartContainer = styled.View`
  background-color: #fff;
  margin: 40px 10px 10px;
  border-radius: 5px;
  padding: 15px;
`;

export const CartItem = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const CartItemData = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CartItemImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const CartItemDescription = styled.View`
  flex: 1;
  margin: 0 10px;
`;

export const CartItemDescriptionPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CartItemFooter = styled.View`
  background: #eeeeee;
  border-radius: 5px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CartItemAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CartItemAmountData = styled.TextInput`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  height: 26px;
  width: 50px;
  margin: 0 5px 0 5px;
  padding: 0;
  text-align: center;
`;

export const CartItemTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CartTotal = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const CartTotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const CartTotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const CartButtonCheckout = styled.TouchableOpacity`
  background: #7159c1;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 5px;
`;

export const CartButtonCheckoutText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
