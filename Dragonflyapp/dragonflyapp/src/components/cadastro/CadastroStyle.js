import styled from 'styled-components';

export const CadDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  border-radius: 3px;
`;

export const Form = styled.form`
  background-color: #3d4654;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  justify-content: center;
  .div-logradouro {
    display: flex;
    justify-content: left;
    column-gap: 10px;
    #nrLogradouro {
      width: 50px;
    }
  }
  h1 {
    color: #8cd19b;
    margin: 0;
  }
  select {
    width: 100%;
  }
  input, select{
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 10px;
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    :focus {
      outline: solid 2px #8cd19b;
    }
    
  }
  .divButtons {
    display: flex;
    justify-content: space-around;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #0c5c11;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  width: 40%;
  transition: all 0.3s ease-in-out;
  :hover {
    background-color: #1c8d19;
    transform: scale(1.1);
  }
`;
