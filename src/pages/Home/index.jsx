import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { HomeContainer, Main, Container } from './styles';

const Home = () => {

  return (
    <HomeContainer>
      <Header>
        <a href="/products" class="button">Veja os produtos</a>
      </Header>

      <Main>
        <Container>
          <h1>Seu marketplace <br /> com uma melhor forma</h1>
          <p>Compre e venda seus produtos rapidamente.</p>

          <nav>
            <a href="/products" class="link-button">Veja os produtos</a>
            <a href="/new-product">Venda seus produtos</a>
          </nav>
        </Container>
      </Main>

      <Footer />
    </HomeContainer>
  );
}

export default Home;