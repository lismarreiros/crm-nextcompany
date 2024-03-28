// import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Button } from '../Button';

const Container = ({
  id,
  children,
  title,
  description,
  onAddItem,
}: ContainerProps) => {
  const {
    attributes,
    setNodeRef,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: id,
    data: {
      type: 'container',
    },
  });
  return (
    <div
      {...attributes}
      ref={setNodeRef}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
      }}
      className={clsx(
        'h-[70vh] p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4 shadow-sm',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between w-[240px] my-4">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl font-semibold">{title}</h1>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <button
          className="border p-2 text-xs rounded-xl shadow-lg hover:shadow-xl"
          {...listeners}
        >
          D
        </button>
      </div>

      {children}
      <Button variant="ghost" onClick={onAddItem}>
        Adicionar novo negócio
      </Button>
    </div>
  );
};

export default Container;
