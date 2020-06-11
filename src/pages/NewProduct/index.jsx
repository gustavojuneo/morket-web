import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { NewProductContainer, Main, Container } from './styles';

const NewProduct = () => {
  return (
    <NewProductContainer>
      <Header goBack={true}>
        <a href="/products" class="button">Veja os produtos</a>
      </Header>

      <Main>
        Página NewProduct
      </Main>

      <Footer />
    </NewProductContainer>
  );
}

export default NewProduct;