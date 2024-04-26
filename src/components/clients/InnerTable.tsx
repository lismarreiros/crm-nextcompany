import React from 'react';
import { TableCell, TableRow } from '../shadcn/ui/table';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  cellPhone: string;
  jobtitle: string;
}

interface Address {
  id: number;
  zipCode: string;
  address: string;
  city: string;
  complement: string;
  number: string;
  ibgeCode: string;
  federativeUnit: string;
  neighborhood: string;
}

interface ClientFormData {
  id: number;
  status: string;
  cpfCnpj: string;
  corporateName: string;
  fantasyName: string;
  activityBranchId: number;
  contacts: Contact;
  address: Address;
  companyId: number;
}

type InnerTableProps = {
  dataContato: ClientFormData;
}

const InnerTable: React.FC<InnerTableProps> = ({ dataContato }) => {

  return (
    <>
      {/** Parte de Contato do Cliente */}
      {/** dados */}
      <TableRow className='relative bg-slate-50 hover:bg-indigo-50'>
        <TableCell colSpan={6}>
            
          <div className='w-[400px] max-w-[500px] relative grid grid-cols-1 mt-4 mx-2 px-4 pt-4 gap-4 -top-6 border-l-2 border-indigo-200'>

            {/** Contato */}
            <div className='flex flex-col gap-2'>
              <h2 className='text-xs font-extralight'>Contato</h2>
              <div className='flex gap-4 items-center'>
                <p className='text-xs font-extralight'>Nome</p>
                <p className='place-self-end'>{dataContato.contacts.name}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Telefone</p>
                <p>{dataContato.contacts.phone}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Telefone 2</p>
                <p>{dataContato.contacts.cellPhone}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Email</p>
                <p>{dataContato.contacts.email}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Função</p>
                <p>{dataContato.contacts.jobtitle}</p>
              </div>
            </div>

            {/** Endereço */}
            <div className='flex flex-col gap-2'>
              <h2 className='text-xs font-extralight'>Endereço</h2>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>CEP</p>
                <p>{dataContato.address.zipCode}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Rua</p>
                <p>{dataContato.address.address}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Bairro</p>
                <p>{dataContato.address.neighborhood}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Cidade/Estado</p>
                <p>{dataContato.address.city} - {dataContato.address.federativeUnit}</p>
              </div>
              <div className='flex items-center gap-4'>
                <p className='text-xs font-extralight'>Número</p>
                <p>{dataContato.address.number}</p>
              </div>
            </div>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default InnerTable;
