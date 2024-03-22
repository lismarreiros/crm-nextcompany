import styled from 'styled-components';

export const Modal = styled.div`
  width: 600px;
  height: 700px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom-style: solid;
  border-bottom-color: #EEEEEE;
  border-width: thin;
  margin: 10px 0;
`;

export const DivForm = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputG = styled.input`
  width: 520px;
  Height: 50px;
  border: 1.5px solid #C5C5C5;
  border-radius: 5px;
  outline: 0;
  padding-left: 10px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #C5C5C5;
  text-align: left;
  font-family: 'Roboto', SemiBold;
  padding-bottom: 13px;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const Title = styled.h1`
  color: #575757;
  font-family: 'Roboto', SemiBold;
  font-size: 16px;
  justify-self: left;
  margin-left: 25px;
`;

export const ButtonX = styled.button`
  outline: none;
  border: none;
  background-color: #ffffff;
`;
