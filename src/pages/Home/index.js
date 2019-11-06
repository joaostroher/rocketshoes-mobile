import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  ProductsScroll,
  ProductsContainer,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductButtonAmount,
  ProductButtonAmountText,
  ProductButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map(product => {
        return {
          ...product,
          priceFormatted: formatPrice(product.price),
        };
      });
      setProducts(data);
    }

    loadProducts();
  }, []);

  const amount = useSelector(state =>
    state.cart.reduce((amounts, product) => {
      amounts[product.id] = product.amount;
      return amounts;
    }, [])
  );

  const dispatch = useDispatch();

  return (
    <ProductsScroll>
      <ProductsContainer>
        {products.map(product => (
          <Product key={product.id}>
            <ProductImage source={{ uri: product.image }} />
            <View>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{product.priceFormatted}</ProductPrice>
            </View>
            <ProductButton
              onPress={() => dispatch(CartActions.addToCartRequest(product.id))}
            >
              <ProductButtonAmount>
                <Icon name="add-shopping-cart" size={16} color="#FFF" />
                <ProductButtonAmountText>
                  {amount[product.id] || 0}
                </ProductButtonAmountText>
              </ProductButtonAmount>
              <ProductButtonText>ADICIONAR</ProductButtonText>
            </ProductButton>
          </Product>
        ))}
      </ProductsContainer>
    </ProductsScroll>
  );
}
