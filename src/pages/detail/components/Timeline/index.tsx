import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput, } from '@/components/shadcn/ui/command';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import FormTask from './Task/FormTask';
import React, { useState } from 'react';
import CardTask from './Task/CardTask';
import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import CardComment from './Comment/CardComment';
import FormComment from './Comment/FormComment';

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

const Timeline: React.FC = () => {
  const [openT, setOpenT] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [tasks, setTasks] = useState<TaskFormData[]>([]);

  const handleCommentSubmit = (newComment: string) => {
    setComments([newComment, ...comments]);
    setOpenC(!openC);
  };

  const handleTaskSubmit = (formData: TaskFormData) => {
    setTasks([formData, ...tasks]);
    setOpenT(!openT);
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

  {/** será usado futuramente para Update do formulário! */}
  const handleReopenModal = (index: number) => {
    const reopenedComment = comments[index];
    console.log(reopenedComment);
    setOpenC((openC) => !openC);
  };

  const handleReopenModalTask = (index: number) => {
    const reopenedTask = tasks[index];
    console.log(reopenedTask);
    setOpenT((openT) => !openT);
  };

  return (
    <div>
      <div className='flex w-full mt-4 px-4 gap-2 justify-end'>
        <Command className='w-1/3 border'> 
          <CommandInput placeholder='Digite para pesquisar...' />
          {/* <CommandList>
              <CommandGroup>
                <CommandEmpty>Resultados não encontrados.</CommandEmpty> 
              </CommandGroup>
            </CommandList> */}
        </Command>
       
        <Dialog open={openT} onOpenChange={setOpenT}>
          <DialogTrigger>
            <Button className='flex gap-1 h-10 text-white text-sm bg-indigo-400 hover:bg-indigo-600'>
              Adicionar Tarefa
            </Button>
          </DialogTrigger>
          <DialogContent className='h-[80%]'>
            <FormTask onTaskSubmit={handleTaskSubmit}/>
          </DialogContent>
        </Dialog>
          
        <Dialog open={openC} onOpenChange={setOpenC}>
          <DialogTrigger>
            <Button className='flex gap-1 h-10 text-white text-sm bg-indigo-400 hover:bg-indigo-600'>
              Adicionar Comentário
            </Button>
          </DialogTrigger>
          <DialogContent className='w-4/5 h-[40%]'>
            <FormComment onCommentSubmit={handleCommentSubmit} />
          </DialogContent>
        </Dialog>
        {/** barra de pesquisa (sem funcionar ainda!) + botões */}
      </div>
      <div className='flex flex-col min-h-screen mt-2 rounded-lg mx-4 bg-white border border-slate-200'>
        <Tabs defaultValue='timeline'>
          <TabsList className='flex justify-start items-center border-b border-slate-200 w-full'>
            <TabsTrigger value='timeline'> Timeline
              {/* <div className='my-1 mx-1 h-5 w-5 bg-indigo-400 rounded rounded-full text-white text-xs content-center'>
                2
              </div> */}
            </TabsTrigger>
            <TabsTrigger value='tarefas'> Tarefas </TabsTrigger>
            <TabsTrigger value='comentarios'> Comentários </TabsTrigger>
          </TabsList>

          <TabsContent value='timeline'>
            {/** Card Comentário */}
            {comments.map((comment, index) => (
              <CardComment key={index} 
                comment={comment} 
                onDelete={() => handleCommentDelete(index)} 
                onReopenModal={() => handleReopenModal(index)} />
            ))}

            {/** Tarefa Adicionada */}
            {tasks.map((formData, index) => (
              <CardTask 
                key={index} 
                formData={formData} 
                onDelete={() => handleTaskDelete(index)} 
                onReopenModal={() => handleReopenModalTask(index)}
              />
            ))} 
          </TabsContent>

          <TabsContent value='comentarios'>
            {/** Card Comentário */}
            {comments.map((comment, index) => (
              <CardComment key={index} 
                comment={comment} 
                onDelete={() => handleCommentDelete(index)} 
                onReopenModal={() => handleReopenModal(index)} />
            ))}
          </TabsContent>
          <TabsContent value='tarefas'>
            {/** Tarefa Adicionada */}
            {tasks.map((formData, index) => (
              <CardTask 
                key={index} 
                formData={formData} 
                onDelete={() => handleTaskDelete(index)} 
                onReopenModal={() => handleReopenModalTask(index)}
              />
            ))} 
          </TabsContent>
        
          {/** Troca de fase */}
          {/* <div className='relative  lg:w-[55vw] h-[110px] md:w-[600px] sm:w-[500px] self-center my-1 md:ml-8 md:mr-8'>
        <div className='absolute  flex items-center size-8 -top-3 -left-4 bg-indigo-500 py-1 px-2 rounded-full'>
        <ArrowLeftRightIcon color='white'/>
        </div>
        
        <div className='flex flex-col my-2 px-2 py-2 bg-white rounded border-2'>
        <div className='flex items-center justify-between'>
        <div className='flex items-center'>
        <h1 className='text-md px-2 py-2'>Troca de Fase | </h1>
        <h1 className='text-xs font-light'> - há 2 dias</h1>
        </div>
        
        </div>
        <h1 className='px-2 py-1 text-sm font-light'>Etapa alterada de ‘Prospecção’ para ‘Qualificação’</h1>
        </div>
      </div> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Timeline;
