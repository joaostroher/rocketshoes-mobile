import React from 'react';
import { SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Logo, Container, BasketContainer, CartCounter } from './styles';

export default function Header({ navigation }) {
  return (
    <SafeAreaView>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <CartCounter>3</CartCounter>
        </BasketContainer>
      </Container>
    </SafeAreaView>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}.isRequired;
