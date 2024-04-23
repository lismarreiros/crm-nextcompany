import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useOpportunityFlowContext } from './OpportunityFlowContext';

type FormValues = {
  flow: { 
    idfluxodeoportunidade: number,
    ordem: number,
    descricao: string 
  }[]
}

const OpportunityFlow = () => {
  const { addOpportunityFlow } = useOpportunityFlowContext();
  const [nextId, setNextId] = useState(7);
  const [nextOrder, setNextOrder] = useState(7);
  const { register, formState: { errors }, handleSubmit, control  } = useForm<FormValues>({
    defaultValues: {
      flow: [
        { idfluxodeoportunidade: 1, ordem: 1,  descricao: 'Prospecção'},
        { idfluxodeoportunidade: 2, ordem: 2, descricao: 'Qualificação' },
        { idfluxodeoportunidade: 3, ordem: 3, descricao: 'Apresentação'},
        { idfluxodeoportunidade: 4, ordem: 4, descricao: 'Proposta' },
        { idfluxodeoportunidade: 5, ordem: 5,descricao: 'Negociação' },
        { idfluxodeoportunidade: 6, ordem: 6, descricao: 'Conclusão' }
      ],
    }
  });

  const { fields, append, remove } = useFieldArray({
    name: 'flow',
    control,
    rules: {
      required: 'Cadastre pelo menos 2 fluxos de oportunidade',
    }
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    addOpportunityFlow(data.flow);
  };

  // const onSubmit = ( data: FormValues ) => {
  //   data.flow.forEach(flow => {
  //     addOpportunityFlow(flow);
  //   });
  // };

  return (
    <div className='flex min-h-screen bg-indigo-200 p-8 justify-center'>
      <div className='min-h-100 w-[50%] flex flex-col items-center overflow bg-white rounded-md py-4 mx-8 mb-4'>
        
        <div className='flex m-2 px-8 w-full justify-between items-center'>
          <h1 className='text-md font-medium'>Fluxo de Oportunidade</h1>
          <div className='flex gap-6 items-center'>
            <Button
              type='button'
              onClick={() => { 
                append({
                  idfluxodeoportunidade: nextId,
                  ordem: nextOrder,
                  descricao: ''
                });
                setNextId(prevId => prevId + 1);
                setNextOrder(prevOrder => prevOrder + 1);
              }}
              variant='ghost' 
              className='gap-1 p-4 bg-indigo-50 hover:bg-indigo-200'> 
              <PlusIcon size={12}/> Adicionar 
            </Button>
            <Command className='flex items-center rounded-lg border-2 p-1 gap-1'>
              <CommandInput placeholder='Pesquisar'/>
            </Command>
          </div>
        </div>
        
        <div className='flex mx-4 my-2 py-2 w-[80%] m-4 border rounded-lg'>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <Table>
              <TableHeader>
                <TableHead>Ordem</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Ações</TableHead>
              </TableHeader>
              {fields.map((field, index) => (
                <TableRow className='border-b-0' key={field.id}>
                  <TableCell className='w-1/5'>
                    <input
                      className='w-full h-10 border rounded-lg p-2 focus:outline-none hover:bg-slate-50'
                      {...register(`flow.${index}.ordem`)}
                    />
                  </TableCell>
                  <TableCell className='w-full'>
                    <input
                      className='w-full h-10 border rounded-lg p-2 focus:outline-none hover:bg-slate-50'
                      {...register(`flow.${index}.descricao`)}
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
              className='mt-4 mx-4 px-2 bg-indigo-50 hover:bg-indigo-200'
            >
              Salvar Alterações
            </Button>
          </form>
          <p>{ errors.flow?.message }</p>
        </div>
      </div>
    </div>
  );
};

export default OpportunityFlow;
