import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { HiOutlineChevronDown } from 'react-icons/hi';

// Definindo tipo para as opções
type Option = {
  value: string;
  label: string;
};

{/* estilização do select */}
const options: Option[] = [
  { value: 'industria', label: 'Indústria' },
  { value: 'comercio', label: 'Comércio' },
  { value: 'servico', label: 'Serviço' },
];

const StyledSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 230px; /* Largura do componente */
  height: 50px; /* Altura do componente */
`;

const StyledSelectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyledSelectedValue = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #575757;
  text-align: left; 
`;

const StyledDropdownIcon = styled(HiOutlineChevronDown)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px; /* Tamanho do ícone */
  height: 20px;
  color: #d7d7d7;
`;

const StyledOptionsList = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  width: 100%;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  z-index: 999;
  font-family: inherit;
  color: #575757;
  text-align: left; 
`;

const StyledOption = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

{/**  função para fechar o dropdown ao apertar esc ou clicar fora */}

function useOutsideClick(ref: React.RefObject<HTMLDivElement>, callback: () => void) {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);
}

function Select() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null); 
  const optionsListRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useOutsideClick(optionsListRef, closeDropdown);

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      setSelectedOption(null); 
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <StyledSelectWrapper>
      <StyledSelectContainer onClick={toggleDropdown}>
        <StyledSelectedValue>
          {selectedOption ? selectedOption.label : 'Selecione uma opção'}
        </StyledSelectedValue>
        <StyledDropdownIcon />
      </StyledSelectContainer>
      {isOpen && (
        <StyledOptionsList ref={optionsListRef}>
          {options.map((option) => (
            <StyledOption key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </StyledOption>
          ))}
        </StyledOptionsList>
      )}
    </StyledSelectWrapper>
  );
}

export default Select;
