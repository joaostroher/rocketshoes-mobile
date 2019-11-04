import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

import {
  ProductsContainer,
  Product,
  ProductImage,
  ProductData,
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
      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <ProductsContainer>
      {products.map(product => (
        <Product key={product.id}>
          <ProductImage source={{ uri: product.image }} />
          <ProductData>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductData>
          <ProductButton>
            <ProductButtonAmount>
              <Icon name="add-shopping-cart" size={16} color="#FFF" />
              <ProductButtonAmountText>3</ProductButtonAmountText>
            </ProductButtonAmount>
            <ProductButtonText>ADICIONAR</ProductButtonText>
          </ProductButton>
        </Product>
      ))}
    </ProductsContainer>
  );
}
