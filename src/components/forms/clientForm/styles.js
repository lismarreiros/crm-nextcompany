import styled from 'styled-components';

export const Modal = styled.div`
  width: 600px;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding-bottom: 5px;
  margin: 15px 0;
`;

export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px 0;
  border-bottom-style: solid;
  border-bottom-color: #EEEEEE;
  border-width: thin;
  margin: 12px 0;
`;

export const DivForm = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const DivSelect = styled.div`
  width: 230px;
  height: 40px;
  border: 2px solid #f4f4f4;
  border-radius: 5px;
  font-size: 12px;
  padding-left: 10px;
  margin: 4px 0;
`;

export const InputG = styled.input`
  width: 540px;
  height: 40px;
  border: 2px solid #f4f4f4;
  border-radius: 5px;
  outline: 0;
  padding-left: 10px;
  margin: 4px 0;

  &:hover {
    background-color: #eeeeee75;
  }

  &:focus-visible {
    outline: 1px solid #F4F4F4
  }

  @media(max-width: 768px) {
    width: 420px;
  }

  &::placeholder {
    color: #C5C5C5; 
    font-family: 'Roboto';
    font-size: 10px;
  }
`;

export const InputP = styled(InputG)`
  width: 282px;
`;

export const InputPP = styled(InputG)`
  width: 149px;
`;

export const InputSelect = styled(InputG)`
  width: 283px;
`;
export const Label = styled.label`
  font-size: 12px;
  color: #C5C5C5;
  text-align: left;
  font-family: 'Roboto';
  font-weight: 600;
  padding-bottom: 7px;
`;

export const Title = styled.h1`
  color: #575757;
  font-family: 'Roboto', SemiBold;
  font-size: 16px;
  justify-self: left;
  margin-left: 7px;
`;

export const ButtonX = styled.button`
  outline: none;
  border: none;
  background-color: #ffffff;
`;

export const ButtonClient = styled.button`
  width: 232px;
  height: 45px;
  margin: 25px;
  border: 1px solid #F8F8F8;
  border-radius: 5px;
  font-family: 'Roboto';
  font-weight: 600;
  color: #575757;
  background-color: #f4f4f4;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;

  `;
