import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  CartContainer,
  CartItem,
  CartItemData,
  CartItemImage,
  CartItemDescription,
  CartItemDescriptionPrice,
  CartItemFooter,
  CartItemAmount,
  CartItemAmountData,
  CartItemTotal,
  CartTotal,
  CartTotalText,
  CartTotalPrice,
  CartButtonCheckout,
  CartButtonCheckoutText,
} from './styles';

export default function Cart() {
  const cart = useSelector(state => {
    return state.cart.map(product => {
      return {
        ...product,
        subtotal: formatPrice(product.amount * product.price),
      };
    });
  });
  const total = useSelector(state => {
    return formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.amount * product.price;
      }, 0)
    );
  });

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <CartContainer>
          {cart.map(product => (
            <CartItem key={product.id}>
              <CartItemData>
                <CartItemImage source={{ uri: product.image }} />
                <CartItemDescription>
                  <Text>{product.title}</Text>
                  <CartItemDescriptionPrice>
                    {product.priceFormatted}
                  </CartItemDescriptionPrice>
                </CartItemDescription>
                <TouchableOpacity
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                >
                  <Icon name="delete-forever" size={24} color="#7159C1" />
                </TouchableOpacity>
              </CartItemData>
              <CartItemFooter>
                <CartItemAmount>
                  <TouchableOpacity onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159C1"
                    />
                  </TouchableOpacity>
                  <CartItemAmountData
                    value={product.amount.toString()}
                    editable={false}
                  />
                  <TouchableOpacity onPress={() => increment(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159C1" />
                  </TouchableOpacity>
                </CartItemAmount>
                <CartItemTotal>{product.subtotal}</CartItemTotal>
              </CartItemFooter>
            </CartItem>
          ))}
          <CartTotal>
            <CartTotalText>TOTAL</CartTotalText>
            <CartTotalPrice>{total}</CartTotalPrice>
          </CartTotal>
          <CartButtonCheckout>
            <CartButtonCheckoutText>FINALIZAR PEDIDO</CartButtonCheckoutText>
          </CartButtonCheckout>
        </CartContainer>
      </ScrollView>
    </SafeAreaView>
  );
}
