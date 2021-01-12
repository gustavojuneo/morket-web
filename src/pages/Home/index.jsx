import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { HomeContainer, Main, Container } from './styles'

const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <Link to="/products" class="button">
          Veja os produtos
        </Link>
      </Header>

      <Main>
        <Container>
          <h1>
            Seu marketplace <br /> com uma melhor forma
          </h1>
          <p>Compre e venda seus produtos rapidamente.</p>

          <nav>
            <Link to="/products" class="link-button">
              Veja os produtos
            </Link>
            <Link to="/new-product">Venda seus produtos</Link>
          </nav>
        </Container>
      </Main>

      <Footer />
    </HomeContainer>
  )
}

export default Home
