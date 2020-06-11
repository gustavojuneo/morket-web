import styled from 'styled-components';

export const NewProductContainer = styled.div`
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
  justify-content: center;
  align-items: center;
  margin: 64px 0;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 736px;
  min-height: 100vh;
  background-color: #FFF;
  padding: 36px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.2);

  .field-group {
    flex: 1;
    display: flex;
  }

  .field {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
    overflow: hidden;

    label {
      margin-bottom: 8px;
    }

    input[type=text],
    input[type=email],
    input[type=number],
    textarea {
      flex: 1;
      background: #F0F0F5;
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: #6C6C80;
    }

    select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      flex: 1;
      background: #F0F0F5;
      border-radius: 8px;
      border: 0;
      padding: 16px;
      font-size: 16px;
      color: #6C6C80;
    }

    textarea {
      min-height: 200px;
      resize: none;
    }

    & + .field {
      margin-left: 24px;
    }
  }
`;