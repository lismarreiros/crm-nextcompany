import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React, { useState } from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Grip } from 'lucide-react';
import { Badge } from '../../../shadcn/ui/badge';
import Drawer from '@/components/detailpanel/Drawer';
import Detail from '@/components/detailpanel/Detail';

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

  const openDrawer = () => {
    if (!isDragging) {
      setOpenRight(true);  
    }
  };
  
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
      <Badge >
        {status}
      </Badge>
      <button className='p-2 bg-red-300' onClick={openDrawer}>
        aperte aqui
      </button>
     
      {openRight && !isDragging && (
        <Drawer open={openRight} side="right" setOpen={setOpenRight}>
          <Detail />
        </Drawer>
      )}
 
    </div>
  );
};

export default Items;
