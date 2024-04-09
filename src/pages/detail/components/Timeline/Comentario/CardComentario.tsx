import { MessageSquare, SquarePen, Trash2 } from 'lucide-react';
import React from 'react';

type ComentarioCardProps = {
    comment: string;
    onDelete: () => void;
    onReopenModal: () => void;
};

const CardComentario: React.FC<ComentarioCardProps> = ({ comment, onDelete, onReopenModal }) => {
  return (
    <div className='relative w-[1000px] h-[110px] border-l-2 border-slate-700	self-center my-4'>
      <div className='absolute  flex items-center size-8 -top-3 -left-4 bg-slate-700 py-1 px-2 rounded-full'>
        <MessageSquare size={18} color='white' />
      </div>

      <div className='flex flex-col m-6 px-2 py-2 bg-white rounded border-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-md px-2 py-2'> Comentário | </h1>
            <h1 className='text-xs font-light'> - há 1 dia</h1>
          </div>

          {/** ícones */}
          <div className='flex gap-1 px-2'>
            <button title='Excluir' onClick={onDelete}>
              <Trash2 size={16}/>
            </button>
            <button title='Mostrar detalhes' onClick={onReopenModal}>
              <SquarePen size={16} />
            </button>
          </div>
    
        </div>
        <h1 className='px-2 py-1 text-sm font-light'>{ comment }</h1>
      </div>
    </div>
  );
};

export default CardComentario;
