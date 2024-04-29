// import React from 'react';
import ContainerProps from './container.type';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
//import { Button } from '@/components/shadcn/ui/button';
import { GripIcon } from 'lucide-react';

const Container = ({
  id,
  children,
  title,
  description,
//  onAddItem,
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
        'h-[90vh] p-4 bg-slate-50 rounded-xl flex flex-col gap-y-2 shadow-sm mt-10',
        isDragging && 'opacity-50',
      )}
    >
      <div className="flex items-center justify-between min-w-[190px] w-full my-2">
        <div className="flex flex-col gap-y-1 ">
          <h1 className="text-slate-800 text-lg font-semibold">{title}</h1>
          <p className="text-slate-400 text-sm">{description}</p>
        </div>
        {/** Button para drag e drop do container */}
        <button
          className="text-xs rounded-xl"
          {...listeners}
        >
          <GripIcon size={22} className='text-slate-900'/>
        </button>
      </div>
      {children}
      {/** Button para adicionar item direto no container */}
      {/* <Button className="p-8">
        <div className="flex items-center gap-2">
          <Plus />
          <span>Adicionar novo negócio</span>
        </div>
      </Button> */}
    </div>
  );
};

export default Container;
