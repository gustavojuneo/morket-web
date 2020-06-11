import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { ProductsContainer, Main, Container, Content } from './styles';

const Products = () => {
  return (
    <ProductsContainer>
      <Header goBack={true}>
        <a href="/new-product" className="button">Venda seus produtos</a>
      </Header>

      <Main>
        <Container>
          <h1>Produtos</h1>
          <Content>
            <article className="product-box">
              <img src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
              <div className="product-info">
                <h3>Camera Cannon Seila oque</h3>
                <h4>R$ 10.000.000,00</h4>
                <span>Montes Claros / MG</span>
                <span>(38) 9 8812-6329</span>
                <p>Essa é uma camera muito boa, 
                  ela possui lente, ela tira foto, ela tem um botão de ligar e 
                  desligar, e se você enfiar ela na tomada ela explode.
                </p>
                <button type="button">Comprar</button>
              </div>
            </article>

            <article className="product-box">
              <img src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
              <div className="product-info">
                <h3>Camera Cannon Seila oque</h3>
                <h4>R$ 10.000.000,00</h4>
                <span>Montes Claros / MG</span>
                <span>(38) 9 8812-6329</span>
                <p>Essa é uma camera muito boa, 
                  ela possui lente, ela tira foto, ela tem um botão de ligar e 
                  desligar, e se você enfiar ela na tomada ela explode.
                </p>
                <button type="button">Comprar</button>
              </div>
            </article>

            <article className="product-box">
              <img src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
              <div className="product-info">
                <h3>Camera Cannon Seila oque</h3>
                <h4>R$ 10.000.000,00</h4>
                <span>Montes Claros / MG</span>
                <span>(38) 9 8812-6329</span>
                <p>Essa é uma camera muito boa, 
                  ela possui lente, ela tira foto, ela tem um botão de ligar e 
                  desligar, e se você enfiar ela na tomada ela explode.
                </p>
                <button type="button">Comprar</button>
              </div>
            </article>

            <article className="product-box">
              <img src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
              <div className="product-info">
                <h3>Camera Cannon Seila oque</h3>
                <h4>R$ 10.000.000,00</h4>
                <span>Montes Claros / MG</span>
                <span>(38) 9 8812-6329</span>
                <p>Essa é uma camera muito boa, 
                  ela possui lente, ela tira foto, ela tem um botão de ligar e 
                  desligar, e se você enfiar ela na tomada ela explode.
                </p>
                <button type="button">Comprar</button>
              </div>
            </article>
          </Content>
        </Container>
      </Main>

      <Footer />
    </ProductsContainer>
  );
}

export default Products;