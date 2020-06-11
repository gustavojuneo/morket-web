import styled from 'styled-components';

export const Container = styled.header`
  width: 90%;
  max-width: 1200px;
  margin: 36px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 30%;
    font-size: 36px;
    font-weight: 700;
    color: #343434;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      color: #34343499;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .4s;
      border: none;
      background-color: transparent;

      &:hover {
        color: #343434;
      }

      svg {
        font-size: 16px;
        margin-right: 8px;
      }

      & + a {
        margin-left: 24px;
      }
    }
    a.button {
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
`;