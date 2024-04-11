import TableView from '@/components/clients/TableView';
import ClientForm from '@/components/forms/clientForm/ClientForm';
import NavBar from '@/components/navbar/NavBar';
import React from 'react';

const ClientPage = () => {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-[12vw_1fr] bg-slate-50 pr-2">
        <div className='bg-white rounded-md mt-10 py-4 px-4 h-full'>
          <ClientForm/>
        </div>
        <div className='bg-white rounded-md mt-10 mx-8 my-2 h-full'>
          <TableView/>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
