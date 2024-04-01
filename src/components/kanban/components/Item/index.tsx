import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Grip } from 'lucide-react';

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
        'px-2 py-4 bg-white shadow-md rounded-xl w-full border border-transparent hover:border-gray-200 cursor-pointer',
        isDragging && 'opacity-50',
      )}
    >
      <div className="">
        <div className="flex items-center justify-between">
          {title}
          <button className="p-2 text-xs rounded-xl"
            {...listeners}
          >
            <Grip color="#4b5563"/>
          </button>
        </div>
        <span className="text-sm text-slate-100 font-semibold bg-slate-600 p-2 rounded-lg">
          {status}
        </span>
      </div>
    </div>
  );
};

export default Items;
