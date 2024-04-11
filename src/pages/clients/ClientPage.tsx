import TableView from '@/components/clients/TableView';
import ClientForm from '@/components/forms/clientForm/ClientForm';
import NavBar from '@/components/navbar/NavBar';
import { Command, CommandInput } from 'cmdk';
import { Search } from 'lucide-react';

const ClientPage = () => {
  return (
    <div className='h-[100vh]'>
      <NavBar />
      <div className="grid grid-cols-[12vw_1fr] bg-slate-50 pr-2 h-full">
        <div className='bg-white rounded-md mt-10 py-4 px-4 h-full'>
          <ClientForm/>
        </div>
        <div className='flex flex-col bg-white rounded-md mt-10 mx-8 mb-4'>
          <div className='flex m-2 justify-between items-center'>
            <h1 className='m-4 text-md font-medium'>Clientes Cadastrados</h1>
            <Command className='flex items-center rounded-lg border-2 p-1 gap-1 h-[50%]'>
              <Search size={14} color='#D2D2D2' />
              <CommandInput placeholder="Pesquisar..."/>
            </Command>
          </div>
          <div>
            <TableView/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
