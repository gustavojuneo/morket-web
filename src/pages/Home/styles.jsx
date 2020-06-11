import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  height: calc(100vh - 40px - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 992px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 64px;
    text-align: center;
    color: #111;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;

    a {
      color: #34343499;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .4s;

      & + a {
        margin-left: 24px;
      }

      &:hover {
        color: #343434;
      }

      &.link-button {
        background-color: #363636;
        padding: 8px 16px;
        color: #DADADA;
        border-radius: 4px;
        transition: .4s;

        &:hover {
          color: #FFF;
        }
      }
    }
  }
`;