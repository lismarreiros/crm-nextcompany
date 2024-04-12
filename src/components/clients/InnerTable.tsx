import React from 'react';
import { TableCell, TableRow } from '../shadcn/ui/table';
import Constants from '@/constants';

const InnerTable = () => {
  const contato = [
    'Maria',
    '(99) 9999-9999',
    '(99) 9999-9999',
    'maria@gmail.com',
    'Dona',
    ''
  ];

  const endereço = [
    '699999-99',
    'Jardins',
    'Rua Oscar Freire',
    'São Paulo-SP',
    '1111',
    '',
  ];

  return (
    <>
      {/** Parte de Contato do Cliente */}
      {/** colunas */}
      <TableRow className='mr-10 border-b-0'>
        <TableCell rowSpan={2} className='bg-slate-100 text-xs font-medium px-4'>Contato</TableCell>
        {Constants.LISTA_COLUNAS_CLIENTES_CONTATO.map((coluna) => (
          <TableCell key={coluna} className='bg-slate-100 text-xs font-medium'>{coluna}</TableCell>
        ))}
      </TableRow>
      {/** dados */}
      <TableRow >
        {contato.map((data) => (
          <TableCell key={data} className='bg-slate-100 text-xs'>{data}</TableCell>
        ))}
      </TableRow>

      {/** Parte do Endereço do Cliente */}
      {/** colunas */}
      <TableRow className='border-b-0'>
        <TableCell rowSpan={2} className='bg-slate-100 text-xs font-medium px-4'>Endereço</TableCell>
        {Constants.LISTA_COLUNAS_CLIENTES_ENDEREÇO.map((coluna) => (
          <TableCell key={coluna} className='bg-slate-100 text-xs font-medium'>{coluna}</TableCell>
        ))}
      </TableRow>

      {/** dados */}
      <TableRow>
        {endereço.map((data) => (
          <TableCell key={data} className='bg-slate-100 text-xs border-b-0'>{data}</TableCell>
        ))}
      </TableRow>
    </>
  );
};

export default InnerTable;
