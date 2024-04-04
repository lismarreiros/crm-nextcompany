import { Textarea } from '../shadcn/ui/textarea';
import { Users, Box, AtSign } from 'lucide-react';
import Editor from './Editor';

const Detail = () => {
  const initialData = {
    time: new Date().getTime(),
    blocks: [
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
    <div className='p-4 h-full w-full overflow-y-auto bg-transparent mb-10'>
      <h1 className='font-medium'>Négocio #000</h1>
      {/** clientes adicionados */}
      <div className='flex items-center h-[45px] px-2 mt-4 bg-slate-100 rounded border-dashed border-2'>
        <h1 className='font-light flex items-center gap-2'>
          <Users size={16}/>
          Cliente x
        </h1>
      </div>

      {/** descrição */}
      <div className='h-[45px] mt-4 mb-4'>
        <h1 className='p-1 font-medium'>Descrição</h1>
        <Textarea className='bg-slate-100 font-light ' />
      </div>

      {/** editor */}
      <div className='mt-20 flex flex-col'>
        <h1 className='p-1 font-medium'>Tarefas</h1>  
        <Editor initialData={initialData}/>
      </div>

      {/** produtos */}
      <div className='flex items-center h-[45px] px-2 mt-4 bg-slate-100 rounded border-dashed border-2'>
        <h1 className='font-light flex items-center gap-2'>
          <Box size={16}/>
          Produto xxy
        </h1>
      </div>

      {/** participantes */}
      <div className='flex items-center h-[45px] px-2 mt-4 bg-slate-100 rounded border-dashed border-2'>
        <h1 className='flex font-light items-center gap-2'>
          <AtSign size={16}/>
          ParceiroY
        </h1>
      </div>
    </div>
  );
};

export default Detail;
