import React from 'react';
import { TableCell, TableRow } from '../shadcn/ui/table';
import Constants from '@/constants';

interface ClientFormDataContato {
  nomeContato: string;
  celular: string;
  fixo: string;
  email: string;
  funcao: string;
  cep: string;
  rua: string;
  cidade: string;
  uf: string;
  bairro: string;
  numero: string;
}

type InnerTableProps = {
  dataContato: ClientFormDataContato;
}

const InnerTable: React.FC<InnerTableProps> = ({ dataContato }) => {
  const contato = [
    { nomeContato: dataContato.nomeContato },
    { celular: dataContato.celular },
    { fixo: dataContato.fixo },
    { email: dataContato.email },
    { funcao: dataContato.funcao },
    { botao: '' }
  ];

  const endereço = [
    { cep: dataContato.cep },
    { rua: dataContato.rua },
    { bairro: dataContato.bairro },
    { cidade: dataContato.cidade && dataContato.uf},
    { numero: dataContato.numero },
    { botao: '' }
  ];

  return (
    <>
      {/** Parte de Contato do Cliente */}
      {/** dados */}
      <TableRow className='relative bg-slate-100'>
        <TableCell colSpan={5}>
            
          <div className='relative grid grid-cols-1 mt-4 mx-4 px-4 pt-4 gap-4 -top-6 border-l-2 border-indigo-200'>

            {/** Contato */}
            <div className='flex flex-col gap-2'>
              <h1>Contato</h1>
              <div className='flex gap-4'>
                <p className='font-extralight'>Contato</p>
                <p>Brooke Davis</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Celular</p>
                <p>(86) 9999-9999</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Fixo</p>
                <p>(86) 9999-9999</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Função</p>
                <p>Sócia</p>
              </div>
            </div>

            {/** Endereço */}
            <div className='flex flex-col gap-2'>
              <h1>Endereço</h1>
              <div className='flex gap-4'>
                <p className='font-extralight'>CEP</p>
                <p>64049-528</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Rua</p>
                <p>Rua Abc</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Bairro</p>
                <p>Ininga</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Cidade/Estado</p>
                <p>Teresina/Piauí</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Número</p>
                <p>1111</p>
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InnerTable;
