import { MessageSquareIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';
import React from 'react';

type ComentarioCardProps = {
    comment: string;
    userName: string;
    onDelete: () => void;
    onReopenModal: () => void;
};

const CardComment: React.FC<ComentarioCardProps> = ({ comment, userName, onDelete, onReopenModal }) => {
  return (
    <div className="w-[95%] pb-2 ml-4 relative before:absolute before:ml-8 before:h-full before:w-0.5 before:bg-indigo-100">
      <div className="relative">
        <div className="md:flex items-center mb-1 px-4">
          <div className="flex items-center space-x-4">
            <div className="flex bg-indigo-400 items-center justify-center w-8 h-8 rounded-full md:order-1">
              <MessageSquareIcon size={14} className='text-white bg-indigo-400'/>
            </div>
          </div>
         
          <div className="flex text-slate-500 items-center ml-4 gap-2 pt-2">
            <span className="text-slate-700">Comentário </span> 
            <p className='text-xs'>de { userName }</p>
          </div>
        </div>
        <div className="flex justify-between bg-white ml-16 mx-4 p-4 rounded-lg border border-slate-100 text-slate-500 text-sm shadow-xs break-words">
          <div>
            { comment }
          </div>
          <div>
            <div className='flex gap-1 px-2'>
              <button title='Excluir' onClick={onDelete}>
                <Trash2Icon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1' />
              </button>
              <button title='Mostrar detalhes' onClick={onReopenModal}>
                <SquarePenIcon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'  />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className='relative lg:w-[55vw] h-[110px] md:w-[800px] sm:w-[500px]  self-center my-1 mb-8 md:ml-8 md:mr-8'>
    //   <div className='absolute flex items-center size-8 -top-3 -left-4 bg-indigo-500 py-1 px-2 rounded-full'>
    //     <MessageSquareIcon size={20} color='white' />
    //   </div>

  //   <div className='flex flex-col my-2 px-2 py-2 bg-white rounded border-2'>
  //     <div className='flex items-center justify-between'>
  //       <div className='flex items-center'>
  //         <h1 className='text-md px-2 py-2'> Comentário | </h1>
  //         <h1 className='text-xs font-light'> - há 1 dia</h1>
  //       </div>

  //       {/** ícones */}
  //       <div className='flex gap-1 px-2'>
  //         <button title='Excluir' onClick={onDelete}>
  //           <Trash2Icon size={26} className='hover:bg-indigo-200 rounded-md p-1' />
  //         </button>
  //         <button title='Mostrar detalhes' onClick={onReopenModal}>
  //           <SquarePenIcon size={26} className='hover:bg-indigo-200 rounded-md p-1'  />
  //         </button>
  //       </div>
    
  //     </div>
  //     <div className='flex-wrap'>

  //       <p className='px-2 py-1 text-sm font-light break-words'>{ comment }</p>
  //     </div>
  //   </div>
  // </div>
  );
};

export default CardComment;
