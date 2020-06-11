import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { ProductsContainer, Main, Container } from './styles';

const Products = () => {
  return (
    <ProductsContainer>
      <Header goBack={true}>
        <a href="/new-product" class="button">Venda seus produtos</a>
      </Header>

      <Main>
        Página Product
      </Main>

      <Footer />
    </ProductsContainer>
  );
}

export default Products;