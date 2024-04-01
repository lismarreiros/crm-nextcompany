import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Grip } from 'lucide-react';
import { Badge } from '../../../shadcn/ui/badge';

type ItemsType = {
  id: UniqueIdentifier;
  title: string;
  status: string;
};

const Items = ({ id, title, status }: ItemsType) => {
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
        'px-4 py-4 bg-white shadow rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer',
        isDragging && 'opacity-50',
      )}
    >
      <div className="">
        <div className="flex items-center justify-between">
          {title}
          <button className="p-2 text-xs rounded-xl"
            {...listeners} >
            <Grip size={16} color="#4b5563"/>
          </button>
        </div>
      </div>  
      <Badge >
        {status}
      </Badge>
    </div>
  );
};

export default Items;
