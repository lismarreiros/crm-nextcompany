import React from 'react';
import Timeline from './components/Timeline';
import FormDetalhe from './components/Form';

const DetailPage = () => {
  return (
    <div className='md:h-[70px] border-t-2 px-4'>
      <div className='flex h-full px-4 items-end justify-between'>
        <div className='py-4 flex items-end gap-16'>
          <h1 className='text-lg font-semibold'>Negócio #ID</h1>
          <p className='text-sm font-light'>Fase: Qualificação</p>
        </div>
        
        <div className='flex gap-12 mr-[33.5px]'>
          {/** Data da Ultima alteração */}
          <div className='flex flex-col  border-l-2 px-2'>
            <h2 className='text-md font-medium'>Última alteração</h2>
            <h3 className='text-sm font-light'>20/20/2022</h3>
          </div>

          {/** Data da Criação */}
          <div className='flex flex-col border-l-2 px-2'>
            <h2 className='text-md font-medium'>Criada</h2>
            <h3 className='text-sm font-light'>20/20/2022</h3>
          </div>

          {/** Data Prevista */}
          <div className='flex flex-col border-l-2 px-2'>
            <h2 className='text-md font-medium'>Previsto</h2>
            <h3 className='text-sm font-light pb-2'>20/20/2022</h3>
          </div>

          {/** Valor*/}
          <div className='flex flex-col border-l-2 px-2'>
            <h2 className='text-md font-medium'>Valor</h2>
            <h3 className='text-sm font-light'>R$ 2002,00</h3>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-[1fr_27vw] md:grid-cols-1'>
        {/** Timeline */}
        <div className='bg-slate-100 rounded'>
          <Timeline />
        </div>
        {/** Formulário de Detalhes */}
        <div className='border-l-2 bg-slate-100 p-2 rounded'>
          <FormDetalhe/>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
