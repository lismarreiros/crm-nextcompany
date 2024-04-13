import { AccordionItem, AccordionTrigger } from '@/components/shadcn/ui/accordion';
import { Accordion, AccordionContent } from '@radix-ui/react-accordion';
import { format } from 'date-fns';
import {  CalendarCheck2Icon, CalendarPlusIcon, CheckSquareIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';

interface TaskFormData {
  id: string;
  descricao: string;
  tipo?: string;
  responsavel?: string;
  participantes?: string;
  dtinicio?: string;
  dtconclusao?: string;
  prioridade?: string;
  notificacao?: boolean;
}

type TarefaCardProps = {
    formData: TaskFormData;
    onDelete: () => void;
    onReopenModal: () => void;
};

const CardTarefa: React.FC<TarefaCardProps> = ({ formData, onDelete, onReopenModal }) => {
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
    <div className={`relative lg:w-[1200px] h-[110px] md:w-[800px] sm:w-[500px] self-center my-1 md:ml-8 md:mr-8 ${marginBottom}`}>
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
            >{ formData.descricao }</AccordionTrigger>

            <AccordionContent>
              <div className='flex sm:flex-wrap md:flex-wrap items-center px-2 py-2 font-light text-xs gap-2'>
                <p className='font-medium'>Responsável:</p>
                <p>{formData.responsavel}</p>
                <p className='font-medium'>Tipo:</p>
                <p>{formData.tipo}</p>
                <p className='font-medium'>Data Ínicio:</p>
                {formData.dtinicio && (
                  <p>{format(formData.dtinicio, 'dd/MM/yyyy')}</p>
                )}
                <p className='font-medium'>Data Conclusão:</p>
                {formData.dtconclusao && (
                  <p>{format(formData.dtconclusao, 'dd/MM/yyyy')}</p>
                )}
                <p className='font-medium'>Participantes:</p>
                <p>{formData.participantes}</p>
                <p className='font-medium'>Prioridade:</p>
                <p>{formData.prioridade}</p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>

  );
};

export default CardTarefa;
