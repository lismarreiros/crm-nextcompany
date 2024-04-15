import React from 'react';
import { TableCell, TableRow } from '../shadcn/ui/table';

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

  return (
    <>
      {/** Parte de Contato do Cliente */}
      {/** dados */}
      <TableRow className='relative bg-slate-50 hover:bg-indigo-100'>
        <TableCell colSpan={5}>
            
          <div className='relative grid grid-cols-1 mt-4 mx-4 px-4 pt-4 gap-4 -top-6 border-l-2 border-indigo-200'>

            {/** Contato */}
            <div className='flex flex-col gap-2'>
              <h1>Contato</h1>
              <div className='flex gap-4'>
                <p className='font-extralight'>Nome</p>
                <p>{dataContato.nomeContato}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Celular</p>
                <p>{dataContato.celular}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Fixo</p>
                <p>{dataContato.fixo}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Email</p>
                <p>{dataContato.email}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Função</p>
                <p>{dataContato.funcao}</p>
              </div>
            </div>

            {/** Endereço */}
            <div className='flex flex-col gap-2'>
              <h1>Endereço</h1>
              <div className='flex gap-4'>
                <p className='font-extralight'>CEP</p>
                <p>{dataContato.cep}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Rua</p>
                <p>{dataContato.rua}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Bairro</p>
                <p>{dataContato.bairro}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Cidade/Estado</p>
                <p>{dataContato.cidade} - {dataContato.uf}</p>
              </div>
              <div className='flex gap-4'>
                <p className='font-extralight'>Número</p>
                <p>{dataContato.numero}</p>
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InnerTable;
