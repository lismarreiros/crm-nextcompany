import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { PlusIcon,  Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useActivityTypeContext } from './ActivityTypeContext';

type FormValuesType = {
  type: {
    idtipoatividade: number,
    descricao: string,
  }[]
}

const ActivityType = () => {
  const { addActivityType } = useActivityTypeContext();
  const [nextId, setNextId] = useState(7);
  const { register, formState: { errors }, handleSubmit, control } = useForm<FormValuesType>({
    defaultValues: {
      type: [
        { idtipoatividade: 1, descricao: 'Almoço' },
        { idtipoatividade: 2, descricao: 'Apresentação' },
        { idtipoatividade: 3, descricao: 'Ligação' },
        { idtipoatividade: 4, descricao: 'Email' },
        { idtipoatividade: 5, descricao: 'Reunião' },
        { idtipoatividade: 6, descricao: 'Mensagem'}
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: 'type',
    control, 
    rules: {
      required: 'Cadastre pelo menos 1 tipo de atividade'
    }
  });

  const onSubmit = (data: FormValuesType) => {
    console.log(data);
    addActivityType(data.type);
  };

  return (
    <div className='flex min-h-screen bg-indigo-200 p-8 justify-center'>
      <div className='min-h-100 w-[50%] flex flex-col items-center overflow bg-white rounded-md py-4 mx-8 mb-4'>
        
        <div className='flex m-2 px-8 w-full justify-between items-center'>
          <h1 className='text-md font-medium'>Tipos de Atividade</h1>
          <div className='flex gap-6 items-center'>
            <Button
              type='button'
              onClick={() => {
                append({
                  idtipoatividade: nextId,
                  descricao: ''
                });
                setNextId(prevId => prevId + 1);
              }}
              variant='ghost' 
              className='gap-1 p-4 bg-indigo-50 hover:bg-indigo-200'> 
              <PlusIcon size={12}/> 
              Adicionar 
            </Button>
            <Command className='flex items-center rounded-lg border-2 p-1 gap-1'>
              <CommandInput placeholder='Pesquisar'/>
            </Command>
          </div>
        </div>
        
        <div className='flex mx-4 my-4 py-2 w-[80%] m-4 border rounded-lg'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>

            <Table>
              <TableHeader>
                <TableHead>Descrição</TableHead>
                <TableHead >Ações</TableHead>
              </TableHeader>
              {fields.map((field, index) => (
                <TableRow className='border-b-0' key={field.id}>
                  <TableCell>
                    <input
                      className='w-full h-10 border rounded-lg p-2 focus:outline-none hover:bg-slate-50'
                      {...register(`type.${index}.descricao`)}
                    />
                  </TableCell>
                  <TableCell>
                    <button type='button' title='Apagar'>
                      <Trash2Icon
                        onClick={() => remove(index)}
                        size={26} 
                        className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'/>
                    </button>  
                  </TableCell>
                </TableRow>
              ))}
            </Table>
            <Button
              type='submit'
              variant='ghost'
              className='mt-4 mx-4 p-4 bg-indigo-50 hover:bg-indigo-200' 
            >
              Salvar Alterações
            </Button>
          </form>
          <p>{errors.type?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityType;
