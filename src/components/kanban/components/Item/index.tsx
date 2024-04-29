import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { ArrowUpRightIcon, ClipboardListIcon, Grip } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/ui/avatar';

type ItemsType = {
  id: UniqueIdentifier;
  bussinessId: number;
  title: string;
  contactNumber: string;
};

const Items = ({ id, bussinessId, title, contactNumber}: ItemsType) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'item',
    },
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'w-full px-4 py-4 bg-white shadow rounded-xl h-[100px] w-full border border-transparent hover:border-gray-200 cursor-pointer',
        isDragging && 'opacity-50',
      )}
    >
      <div className='flex flex-col'>
        <div className="flex items-start h-full">
          <div className='flex flex-col gap-2 pr-2 mr-2 items-center justify-center'>
            <Avatar className='h-5 w-5'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <button className="py-2 px-1 relative border-2 border-transparent rounded-full focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out" >
              <ClipboardListIcon size={20} color='#4b5563'/>
              <span className="absolute inset-0 object-right-top -mr-6">
                <div className="inline-flex items-center px-1.5 py-0.5 border-2 rounded-full text-xs font-semibold leading-4 bg-indigo-500 text-white">
                  1
                </div>
              </span>
            </button>
          </div>
          <div className='w-full flex flex-col'>
            <div className='flex justify-between border-l border-indigo-50 px-2 items-baseline gap-4'>
              <div>
                <div className='flex items-baseline gap-2'>
                  {title} 
                  <p className='text-xs font-light'>#{bussinessId}</p>
                </div>
                <p className='mt-2 text-xs'>
                  {contactNumber}
                </p>
              </div>
              <div className='h-full flex flex-col items-center gap-6'>
                <button title='Mover' className="px-1 text-xs rounded-xl"
                  {...listeners}
                >
                  <Grip size={16} color="#4b5563"/>
                </button>
                <Link to={`/detalhe/${bussinessId}`} title='Ir para detalhes'>
                  <ArrowUpRightIcon size={16} color="#4b5569" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Items;
