// import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import { Button } from '../Button';
import { Grip, Plus } from 'lucide-react';
import { ScrollArea } from '@radix-ui/react-scroll-area';

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
        'h-[90vh] p-4 bg-gray-50 rounded-xl flex flex-col gap-y-4 shadow-sm',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between w-[240px] my-4">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-gray-800 text-xl font-semibold">{title}</h1>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <button
          className="text-xs rounded-xl"
          {...listeners}
        >
          <Grip color="#4b5563"/>
        </button>
      </div>

        {children}
      <Button variant="ghost" onClick={onAddItem} className={clsx('hover:bg-blue-100 hover:text-blue-500')}>
        <div className="flex items-center gap-2">
          <Plus />
          <span>Adicionar novo negócio</span>
        </div>
      </Button>
    </div>
  );
};

export default Container;
