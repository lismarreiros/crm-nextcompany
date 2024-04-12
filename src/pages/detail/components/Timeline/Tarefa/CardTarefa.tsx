import { AccordionItem, AccordionTrigger } from '@/components/shadcn/ui/accordion';
import { Accordion, AccordionContent } from '@radix-ui/react-accordion';
import {  CalendarCheck2Icon, CalendarPlusIcon, CheckSquareIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';

type TarefaCardProps = {
    task: string;
    onDelete: () => void;
    onReopenModal: () => void;
};

const CardTarefa: React.FC<TarefaCardProps> = ({ task, onDelete, onReopenModal }) => {
  const [cardTitle, setCardTitle] = useState('Tarefa Adicionada');
  const [icon, setIcon] = useState(<CalendarPlusIcon size={20} color='white' />);
  const [bgColor, setBgColor] = useState('bg-indigo-500');
  const [isCompleted, setIsCompleted] = useState(false);
  const [marginBottom, setMarginBottom] = useState('mb-4');
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleTaskComplete = () => {
    setCardTitle('Tarefa Concluída');
    setIcon(<CalendarCheck2Icon size={20} color='white' />);
    setBgColor('bg-green-500');
    setIsCompleted(true);
  };

  const handleAccordionToggle = () => {
    setAccordionOpen(!accordionOpen);
    setMarginBottom(accordionOpen ? 'mb-4' : 'mb-12');
  };

  return (
    <div className={`relative lg:w-[1000px] h-[110px] md:w-[800px] self-center my-1 ${marginBottom}`}>
      <div className={`absolute  flex items-center size-8 -top-3 -left-4 ${bgColor} py-1 px-2 rounded-full`}>
        {icon}
      </div>

      <div className='flex flex-col my-2 px-2 py-2 bg-white rounded border-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-md px-2 py-2'>{cardTitle} | </h1>
            <h1 className='text-xs font-light'> - há 1 dia</h1>
          </div>

          {/** ícones */}
          <div className='flex gap-1 px-2'>
            <button title='Excluir' onClick={onDelete}>
              <Trash2Icon size={26} className='hover:bg-indigo-200 rounded-md p-1' />
            </button>
            <button title='Editar' onClick={onReopenModal}>
              <SquarePenIcon size={26} className='hover:bg-indigo-200 rounded-md p-1' />
            </button>
            { !isCompleted && (
              <button title='Marcar como concluída' onClick={handleTaskComplete}>
                <CheckSquareIcon size={26} className='hover:bg-indigo-200 rounded-md p-1'  />
              </button>
            )}
          </div>
    
        </div>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1' className='flex flex-col items-start'>
            <AccordionTrigger className='px-2 py-1 text-sm font-light gap-2 text-left'
              onClick={handleAccordionToggle}
            >{ task }</AccordionTrigger>

            <AccordionContent>
              <div className='flex items-center px-2 py-2 font-light text-xs gap-2'>
                <p className='font-medium'>Responsável:</p>
                <p>Fulano</p>
                <p className='font-medium'>Data Ínicio:</p>
                <p>12/12/2012</p>
                <p className='font-medium'>Data Conclusão:</p>
                <p>12/12/2012</p>
                <p className='font-medium'>Participantes:</p>
                <p>@João @José @Maria</p>
                <p className='font-medium'>Prioridade:</p>
                <p>Alta</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

  );
};

export default CardTarefa;
