import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { ArrowLeftRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import FormTarefa from './Tarefa/FormTarefa';
import FormComentario from './Comentario/FormComentario';
import CardComentario from './Comentario/CardComentario';
import React, { useState } from 'react';
import CardTarefa from './Tarefa/CardTarefa';

const Timeline: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([]);

  const handleCommentSubmit = (newComment: string) => {
    setComments([newComment, ...comments]);
  };

  const handleTaskSubmit = (newTask: string) => {
    setTasks([newTask, ...tasks]);
  };
  
  const handleCommentDelete = (index: number) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };

  const handleTaskDelete = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='flex flex-col'>
      <div className='flex p-2 items-center justify-between'>
        <div>
          <h1 className='text-lg p-4 font-light'>Timeline</h1>
        </div>
        {/** barra de pesquisa + botões */}
        <div className='flex gap-4'>
          <Command>
            <CommandInput placeholder='Digite para pesquisar...'/>
          </Command>
          <Dialog>
            <DialogTrigger>
              <Button>Adicionar Tarefa</Button>
            </DialogTrigger>
            <DialogContent className='h-[80%]'>
              <FormTarefa onTaskSubmit={handleTaskSubmit}/>
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger>
              <Button>Adicionar Comentário</Button>
            </DialogTrigger>
            <DialogContent className='w-4/5 h-[40%]'>
              <FormComentario onCommentSubmit={handleCommentSubmit} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/** Card Comentário */}
      {comments.map((comment, index) => (
        <CardComentario key={index} comment={comment} onDelete={() => handleCommentDelete(index)} />
      ))}

      {/** Tarefa Adicionada */}
      {tasks.map((task, index) => (
        <CardTarefa key={index} task={task} onDelete={() => handleTaskDelete(index)} />
      ))}
      
      {/** Troca de fase */}
      <div className='relative w-[1000px] h-[110px] border-l-2 border-slate-700	self-center my-4'>
        <div className='absolute  flex items-center size-8 -top-3 -left-4 bg-slate-700 py-1 px-2 rounded-full'>
          <ArrowLeftRight color='white'/>
        </div>

        <div className='flex flex-col m-6 px-2 py-2 bg-white rounded border-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='text-md px-2 py-2'>Troca de Fase | </h1>
              <h1 className='text-xs font-light'> - há 2 dias</h1>
            </div>

            {/** ícones */}
            <div className='flex gap-1 px-2'>
              {/* <SquarePen size={16} /> */}
              {/* <Trash2 size={16}/> */}
            </div>
        
          </div>
          <h1 className='px-2 py-1 text-sm font-light'>Etapa alterada de ‘Prospecção’ para ‘Qualificação’</h1>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
