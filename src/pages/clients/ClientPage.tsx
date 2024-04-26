/* eslint-disable indent */
import TableView from '@/components/clients/TableView';
import ClientForm from '@/components/forms/clientForm/ClientForm';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { useState } from 'react';

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

const ClientPage = () => {
  const [clients, setClient] = useState<ClientFormData[]>([
    {
      'id': 1,
      'status': 'A',
      'cpfCnpj': '12345678901234',
      'corporateName': 'ATACADO S.A',
      'fantasyName': 'ALUMAPI',
      'activityBranchId': 1,
      'contacts': {
              'id': 2,
              'name': 'joao',
              'email': 'joao@nextcompany.com.br',
              'phone': '123456789',
              'cellPhone': '123456789',
              'jobtitle' : 'Sócio'
          },
      'address': {
          'id': 1,
          'zipCode': '6400000',
          'address': 'Rua 02',
          'city': 'Teresina',
          'complement': '',
          'number': '123',
          'ibgeCode': '1234',
          'federativeUnit': 'PI', 
          'neighborhood': 'Parq. Piauí'
      },
      'companyId': 1
  }
  
  ]);

  const handleClientSubmit = (data: ClientFormData) => {
    setClient([data, ...clients]);
  };

  const handleClientDelete = (index: number) => {
    const listClient = [...clients];
    listClient.splice(index, 1);
    setClient(listClient);
  };
  
  return (
    <div className='min-h-screen bg-indigo-200 p-8'>
        <div className='min-h-100 flex flex-col overflow bg-white rounded-md py-4 mx-8 mb-4 '>   
          <div className='flex m-2 justify-between items-center pr-2'>
            <h1 className='m-4 text-md font-medium'>Clientes</h1>
            <div className='flex gap-6'>
              <ClientForm onClientSubmit={handleClientSubmit}/>
              <Command className='flex items-center rounded-lg border-2 p-1 gap-1'>
                <CommandInput placeholder="Pesquisar..."/>
              </Command>
            </div>
          </div>
          <div>
          <TableView
          data={clients}
          onClientDelete={handleClientDelete} 
           />
          </div>
        </div>
      </div>
  );
};

export default ClientPage;
