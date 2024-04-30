import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput, } from '@/components/shadcn/ui/command';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import FormTask from './Task/FormTask';
import React, { useEffect, useState } from 'react';
import CardTask from './Task/CardTask';
import { Tabs, TabsList, TabsTrigger } from '@/components/shadcn/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import CardComment from './Comment/CardComment';
import FormComment from './Comment/FormComment';
import { ClipboardListIcon, FileIcon, MessageSquareIcon } from 'lucide-react';
import { useBusinessDetailContext } from '@/context/BusinessDetailContext';
import { _BusinessComment } from '@/entities/bussiness';
import { useBussiness } from '@/hook/useBussiness';

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
  const [comments, setComments] = useState<_BusinessComment[]>([]);
  const [tasks, setTasks] = useState<TaskFormData[]>([]);

  const { bussiness } = useBusinessDetailContext();
  const { deleteBusinessComment } = useBussiness();
  const { createBusinessComment } = useBussiness();

  // useEffect(() => {
  //   if (!bussiness) return;

  //   setComments(prevComments => [
  //     ...prevComments,
  //     ...bussiness.businessComments.map((comment: any) => ({...comment}))
  //   ]);
  // }, [bussiness]);

  const handleCommentSubmit = async (comentario: string) => {
    try {
      console.log('Enviando comentário:', comentario);
      await createBusinessComment({
        businessId: bussiness.id,
        comment: comentario
      });
      setComments([comentario, ...comments]);
      setOpenC(!openC);

    } catch (error) {
      console.error('Erro ao criar o comentário:', error);
    }
  };

  const handleTaskSubmit = (formData: TaskFormData) => {
    setTasks([formData, ...tasks]);
    setOpenT(!openT);
  };
 
  const handleCommentDelete = async (index: number) => {
    try {
      await deleteBusinessComment(comments[index].id);
      const newComments = [...comments];
      newComments.splice(index, 1);
      setComments(newComments);
    } catch (error) {
      console.error('Erro ao excluir o comentário: ', error);
    }
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
      <div className='flex bg-white mx-4 mt-4 p-2 rounded-lg border gap-2 justify-end'>
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
            <Button title='Adicionar Tarefa' className='flex gap-1 h-10 text-slate-500 border text-sm bg-white hover:bg-indigo-100'>
              <ClipboardListIcon size={20} className='text-slate-500'/> Tarefa
            </Button>
          </DialogTrigger>
          <DialogContent className='h-[80%]'>
            <FormTask onTaskSubmit={handleTaskSubmit}/>
          </DialogContent>
        </Dialog>
          
        <Dialog open={openC} onOpenChange={setOpenC}>
          <DialogTrigger>
            <Button title='Adicionar Comentário' className='flex gap-1 h-10 text-white text-sm text-slate-500 border  bg-white hover:bg-indigo-100'>
              <MessageSquareIcon size={20} className='text-slate-500 '/> Comentário
            </Button>
          </DialogTrigger>
          <DialogContent className='w-4/5 h-[40%]'>
            <FormComment onCommentSubmit={handleCommentSubmit} />
          </DialogContent>
        </Dialog>
        <Button title='Anexar Arquivos' className='flex gap-1 h-10 text-white text-sm text-slate-500 border bg-white hover:bg-indigo-100'>
          <FileIcon size={20} className='text-slate-500 '/> Anexos
        </Button>
      </div>
  
      <div className='flex flex-col min-h-screen mt-2 rounded-lg mx-4 bg-white border border-slate-200'>
        <Tabs defaultValue='timeline'>
          <TabsList className='flex justify-start items-center border-b border-slate-200 w-full'>
            {/* <TabsTrigger value='resumo'>Resumo</TabsTrigger> */}
            <TabsTrigger value='timeline'> Timeline
              {/* <div className='my-1 mx-1 h-5 w-5 bg-indigo-400 rounded rounded-full text-white text-xs content-center'>
                2
              </div> */}
            </TabsTrigger>
       
          </TabsList>

          <TabsContent value='timeline' className='mt-6'>
            {/** Card Comentário */}
            {comments.map((comment, index) => (
              <CardComment key={index}
                userName={comment.user.name} 
                comment={comment.comment} 
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

          <TabsContent value='resumo' className='mt-6'>
            {/* * Tarefa Adicionada
            {tasks.map((formData, index) => (
              <CardTask 
                key={index} 
                formData={formData} 
                onDelete={() => handleTaskDelete(index)} 
                onReopenModal={() => handleReopenModalTask(index)}
              />
            ))}  */}
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
