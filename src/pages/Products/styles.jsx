import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    display: flex;
    margin-left: 56px;
    color: #36363699;
    margin-bottom: 64px;
    position: relative;
    padding: 0 24px 16px;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #36363622;
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  justify-content: center;
  grid-gap: 24px;

  @media (max-width: 578px) {
    & {
      grid-template-columns: repeat(auto-fit, 230px);
    }
   }


  article.product-box {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fff;
    padding-bottom: 24px;
    img {
      width: 100%;
      height: 160px;
      object-fit: cover;

    }

    .product-info {
      width: 100%;
      padding: 24px 8px;

      h3, h4, p, span {
        display: block;
        margin-bottom: 8px;
      }

      p {
        font-family: 'Merriweather', serif;
        line-height: 1.5em;
        margin-bottom: 24px;
      }

      button {
        background-color: #363636;
        padding: 8px 16px;
        color: #DADADA;
        border-radius: 4px;
        transition: .4s;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

        &:hover {
          color: #FFF;
        }
      }
    }
  }
`;