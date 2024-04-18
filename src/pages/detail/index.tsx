import React from 'react';
import Timeline from './components/Timeline';
import FormDetalhe from './components/Form/Form';

const DetailPage = () => {
  return (
    <div className='w-screen bg-slate-50'>
      <div className='flex px-4 py-2 items-end justify-between bg-slate-50'>
        <h1 className='text-lg text-slate-900'>Negócio #ID</h1>
        <p className='text-sm font-light text-slate-900 mr-2'>Fase: Qualificação</p>
      </div>

      <div className='grid lg:grid-cols-[1fr_32vw] md:grid-cols-1 '>
        {/** Timeline */}
        <div className='min-h-screen bg-indigo-100 border-t-2 border-indigo-200'>
          <Timeline />
        </div>
        {/** Formulário de Detalhes */}
        <div className='min-h-screen border-l-2 border-t-2 border-indigo-200 bg-slate-50'>
          <FormDetalhe/>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
