import Editor from './Editor';

const Detail = () => {
  const initialData = {
    time: new Date().getTime(),
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Descrição do negócio',
          level: 1,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: '',
          placeholder: 'Escreva algo...',
        },
      },
      {
        type: 'header',
        data: {
          text: 'Tarefas',
          level: 1,
        },
      },
      {
        type: 'checklist',
        data: {
          items: [
            {
              text: '',
              checked: false,
            },
          ],
        }
      }
    ],
    version: '2.8.1',
  };

  return (
    <div className='p-4 h-full w-full scroll-auto bg-transparent'>
      <h1>Négocio #000</h1>
      {/** clientes adicionados */}
      <div className='flex flex-col h-[45px] px-2 mt-4 bg-slate-100 justify-center rounded border-dashed border-2'>
        <h1>Cliente x</h1>
      </div>

      {/** editor (checklist, descrição e anexos) */}
      <h1>Descrição</h1>
      <Editor initialData={initialData}/>

      {/** produtos adicionados */}
      <div></div>

      {/** participantes */}
      <div></div>
    </div>
  );
};

export default Detail;
