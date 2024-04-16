import React from 'react';
import Timeline from './components/Timeline';
import FormDetalhe from './components/Form';

const DetailPage = () => {
  return (
    <div className='w-screen md:h-[50px] bg-slate-50'>
      <div className='flex h-full px-4 py-2 items-end justify-between'>
        <h1 className='text-lg text-slate-900'>Negócio #ID</h1>
        <p className='text-sm font-light text-slate-900 mr-2'>Fase: Qualificação</p>
      </div>

      <div className='grid lg:grid-cols-[1fr_35vw] md:grid-cols-1 '>
        {/** Timeline */}
        <div className='bg-indigo-100'>
          <Timeline />
        </div>
        {/** Formulário de Detalhes */}
        <div className='border-l-2 border-indigo-200 bg-indigo-100'>
          <FormDetalhe/>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
