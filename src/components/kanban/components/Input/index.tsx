import React from 'react';
import InputProps from './input.type';
import { Input } from '@/components/shadcn/ui/input';

const InputModal = ({ name, type, value, placeholder, onChange }: InputProps) => {
  return (
    <Input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></Input>
  );
};

export default InputModal;
