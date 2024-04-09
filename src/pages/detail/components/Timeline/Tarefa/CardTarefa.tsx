import { CalendarCheck2, CalendarPlus, CheckSquare, Eye, SquarePen, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

type TarefaCardProps = {
    task: string;
    onDelete: () => void;
};

const CardTarefa: React.FC<TarefaCardProps> = ({ task, onDelete }) => {
  const [cardTitle, setCardTitle] = useState('Tarefa Adicionada');
  const [icon, setIcon] = useState(<CalendarPlus size={18} color='white' />);
  const [bgColor, setBgColor] = useState('bg-slate-700');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleTaskComplete = () => {
    setCardTitle('Tarefa Concluída');
    setIcon(<CalendarCheck2 size={18} color='white' />);
    setBgColor('bg-green-700');
    setIsCompleted(true);
  };

  return (
    <div className='relative w-[1000px] h-[110px] border-l-2 border-slate-700 self-center my-4'>
      <div className={`absolute  flex items-center size-8 -top-3 -left-4 ${bgColor} py-1 px-2 rounded-full`}>
        {icon}
      </div>

      <div className='flex flex-col m-6 px-2 py-2 bg-white rounded border-2'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='text-md px-2 py-2'>{cardTitle} | </h1>
            <h1 className='text-xs font-light'> - há 1 dia</h1>
          </div>

          {/** ícones */}
          <div className='flex gap-1 px-2'>
            <button title='Editar'>
              <SquarePen size={16} />
            </button>
            { !isCompleted && (
              <button title='Marcar como concluída' onClick={handleTaskComplete}>
                <CheckSquare size={16} />
              </button>
            )}
            <button title='Excluir' onClick={onDelete}>
              <Trash2 size={16}/>
            </button>
            <button title='Mostrar detalhes'>
              <Eye size={16} />
            </button>
          </div>
    
        </div>
        <h1 className='px-2 py-1 text-sm font-light'>{ task }</h1>
      </div>
    </div>

  );
};

export default CardTarefa;
