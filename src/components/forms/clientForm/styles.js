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
  margin: 4px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputG = styled.input`
  width: 540px;
  height: 50px;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  outline: 0;
  padding-left: 1rem;
  margin: 4px 0;
  font-size: 1rem;
  color: #575757;

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
    font-size: 1rem;
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
  font-size: 1rem;
  color: #777;
  text-align: left;
  font-family: 'Roboto';
  font-weight: 500;
  padding-bottom: 7px;
`;

export const Title = styled.h1`
  color: #575757;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 1.5rem;
  justify-self: left;
  margin-left: 7px;
`;

export const ButtonX = styled.button`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  outline: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  margin-right: 1rem;
  width: 45px;
  height: 45px;

  &:hover {
    span {
      visibility: visible;
    }
    svg {
      color: #575757;
    }

    transform: scale(1.05);
    transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
  }

`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  opacity: 0.8;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;

  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
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
  cursor: pointer;
  background-color: #f4f4f4;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;

  &:hover {
    background-color: #575757;
    color: #f4f4f4;
    transform: scale(1.05);
    transition: background-color 0.5s ease, color 0.5s ease, transform 0.5s ease;
  }
`;

export const SelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  font-size: 1rem;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  color: #c5c5c5;
;

  &:focus {
    outline: none;
  } 
`;

export const StyledOption = styled.option`
  background-color: #fff;
  font-size: 1rem;
  color: #333;

  &:hover {
    background-color: #f0f0f0;
  }
`;
