/* eslint-disable indent */
import TableView from '@/components/clients/TableView';
import ClientForm from '@/components/forms/clientForm/ClientForm';
import { Command, CommandInput } from 'cmdk';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface ClientFormData {
  cpfOrCnpj: string;
  nomefantasia: string;
  razao: string;
  ramo: string;
  status: string;
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

const ClientPage = () => {
  const [clients, setClient] = useState<ClientFormData[]>([
    {
      cpfOrCnpj:'111.111.111-60',
      nomefantasia: 'Empresa Abc',
      razao: 'Abc ltda',
      ramo: 'Comércio',
      status: 'Ativo',
      nomeContato: 'Maria',
      celular: '98888-8888',
      fixo: '98888-9999',
      email: 'maria@yahoo.com',
      funcao: 'Sócia',
      cep: '65400-590',
      rua: 'Rua Marechal',
      cidade: 'Teresina',
      uf:'PI',
      bairro: 'Porto Alegre',
      numero: '1111'
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
            <h1 className='m-4 text-md font-medium'>Clientes Cadastrados</h1>
            <div className='flex gap-6'>
              <ClientForm onClientSubmit={handleClientSubmit}/>
              <Command className='flex items-center rounded-lg border-2 p-1 gap-1'>
                <Search size={14} color='#D2D2D2' />
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
