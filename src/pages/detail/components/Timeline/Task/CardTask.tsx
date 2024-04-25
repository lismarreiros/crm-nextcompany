import { AccordionItem, AccordionTrigger } from '@/components/shadcn/ui/accordion';
import { Accordion, AccordionContent } from '@radix-ui/react-accordion';
import { format } from 'date-fns';
import { CheckSquareIcon, ClipboardCheckIcon, ClipboardIcon, SquarePenIcon, Trash2Icon } from 'lucide-react';
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
  const [icon, setIcon] = useState(<ClipboardIcon size={14} color='white' />);
  const [bgColor, setBgColor] = useState('bg-indigo-400');
  const [isCompleted, setIsCompleted] = useState(false);
  const [marginBottom, setMarginBottom] = useState('mb-0');
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleTaskComplete = () => {
    setCardTitle('Tarefa Concluída');
    setIcon(<ClipboardCheckIcon size={14} color='white' />);
    setBgColor('bg-green-500');
    setIsCompleted(true);
  };

  const handleAccordionToggle = () => {
    setAccordionOpen(!accordionOpen);
    setMarginBottom(accordionOpen ? 'mb-0' : 'mb-2');
  };

  return (
    <div className={`w-[95%] pb-2 relative ml-4 before:absolute before:ml-8 before:h-full before:w-0.5 before:bg-indigo-100 ${marginBottom} before:${marginBottom}`}>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <div className='relative'>
            <div className='md:flex items-center mb-1 px-4'>
              <div className='flex items-center space-x-4'>
                <div className={`flex items-center justify-center ${bgColor} w-8 h-8 rounded-full md:order-1`}>
                  {icon}
                </div>
              </div>
              <div className='flex text-slate-500 items-center ml-4 gap-2 pt-2'>
                <span className='text-slate-700'>{cardTitle}</span>
                <p className='text-xs'>de Mark Mikrol</p>
              </div>
            </div>
            <div className='flex flex-col justify-between bg-white ml-16 mx-4 p-4 rounded-lg border border-slate-100 text-slate-500 text-sm shadow-xs break-words'>
              <div className='flex justify-between'>
                <AccordionTrigger className='px-2 py-1 text-sm font-normal gap-2'
                  onClick={handleAccordionToggle}
                >{ formData.descricao }</AccordionTrigger>
                <div className='flex gap-1 px-2'>
                  <button title='Excluir' onClick={onDelete}>
                    <Trash2Icon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1' />
                  </button>
                  <button title='Editar' onClick={onReopenModal}>
                    <SquarePenIcon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1' />
                  </button>
                  { !isCompleted && (
                    <button title='Marcar como concluída' onClick={handleTaskComplete}>
                      <CheckSquareIcon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'  />
                    </button>
                  )}
                </div>
              </div>

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
            </div>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default CardTarefa;
