import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React, { useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Grip, Pencil } from 'lucide-react';
import { Badge } from '../../../shadcn/ui/badge';
import Drawer from '@/components/detailpanel/Drawer';
import Detail from '@/components/detailpanel/Detail';
import { Link } from 'react-router-dom';

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
  status: string;
};

const Items = ({ id, title, status }: ItemsType) => {
  const [openRight, setOpenRight] = useState(false);
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

  // const openDrawer = () => {
  //   if (!isDragging) {
  //     setOpenRight(true);  
  //   }
  // };
  
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'px-4 py-4 bg-white shadow rounded-xl h-[100px] w-full border border-transparent hover:border-gray-200 cursor-pointer',
        isDragging && 'opacity-50',
      )}
    >
      <div className=''>
        <div className="flex items-center justify-between">
          {title}
          <button className="p-2 text-xs rounded-xl"
            {...listeners}
          >
            <Grip size={16} color="#4b5563"/>
          </button>
        </div>
      </div> 
      <div className='flex items-center justify-between mt-2 pr-2 gap-2'>
        <Badge className='w-[6vw]'>
          {status}
        </Badge> 
        <Link to='/detalhe'>
          <Pencil size={16} color="#4b5569" />
        </Link>
        {/* <button onClick={openDrawer}>
          <LayoutList size={16} color="#4b5563"/>
        
        </button> */}
      </div>
     
      {openRight && !isDragging && (
        <Drawer open={openRight} setOpen={setOpenRight}>
          <Detail />
        </Drawer>
      )}
 
    </div>
  );
};

export default Items;
