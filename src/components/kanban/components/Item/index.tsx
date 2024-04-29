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
          <div className='flex flex-col gap-4 border-r border-indigo-50 pr-2 mr-2 items-center justify-center'>
            <Avatar className='h-5 w-5'>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ClipboardListIcon size={22} className='rounded-full p-1 bg-indigo-300' color='#4b5569'/>
          </div>
          <div className='w-full flex flex-col'>
            <div className='flex justify-between items-baseline gap-1'>
              <div>
                {title} 
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
