import React from 'react';
import Editor from './Editor';

const Detail = () => {
  const initialData = {
    blocks: [
      {
        type: 'paragraph',
        data: {
          text: 'Hello, this is the initial content loaded from JSON!',
        },
      }
    ],
    version: '2.8.1',
  };

  return (
    <div className='p-2'>
      <h1>Négocio #000</h1>
      {/** clientes adicionados */}
      <div className='flex flex-col h-[45px] px-2 mt-4 bg-slate-100 justify-center rounded border-dashed border-2'>
        <h1>Cliente x</h1>
      </div>

      {/** editor (checklist, descrição e anexos) */}
      <Editor initialData={initialData}/>

      {/** produtos adicionados */}
      <div></div>

      {/** participantes */}
      <div></div>
    </div>
  );
};

export default Detail;
