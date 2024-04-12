import { MessageSquareIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';
import React from 'react';

type ComentarioCardProps = {
    comment: string;
    onDelete: () => void;
    onReopenModal: () => void;
};

const CardComentario: React.FC<ComentarioCardProps> = ({ comment, onDelete, onReopenModal }) => {
  return (
    <div className='relative lg:w-[1200px] h-[110px] md:w-[800px] sm:w-[500px]  self-center my-1 mb-8 md:ml-8 md:mr-8'>
      <div className='absolute flex items-center size-8 -top-3 -left-4 bg-indigo-500 py-1 px-2 rounded-full'>
        <MessageSquareIcon size={20} color='white' />
      </div>

      <div className='flex flex-col my-2 px-2 py-2 bg-white rounded border-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-md px-2 py-2'> Comentário | </h1>
            <h1 className='text-xs font-light'> - há 1 dia</h1>
          </div>

          {/** ícones */}
          <div className='flex gap-1 px-2'>
            <button title='Excluir' onClick={onDelete}>
              <Trash2Icon size={26} className='hover:bg-indigo-200 rounded-md p-1' />
            </button>
            <button title='Mostrar detalhes' onClick={onReopenModal}>
              <SquarePenIcon size={26} className='hover:bg-indigo-200 rounded-md p-1'  />
            </button>
          </div>
    
        </div>
        <div className='flex-wrap'>

          <p className='px-2 py-1 text-sm font-light break-words'>{ comment }</p>
        </div>
      </div>
    </div>
  );
};

export default CardComentario;
