import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { Input } from '@/components/shadcn/ui/input';
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem } from '@/components/shadcn/ui/form';

type FormValues = {
  flow: { 
    idfluxodeoportunidade: string,
    descricao: string 
  }[]
}

const OpportunityFlow = () => {
  const [nextId, setNextId] = useState('7');
  const { register, formState: { errors }, handleSubmit, control  } = useForm<FormValues>({
    defaultValues: {
      flow: [
        { idfluxodeoportunidade: '1', descricao: 'Prospecção'},
        { idfluxodeoportunidade: '2', descricao: 'Qualificação' },
        { idfluxodeoportunidade: '3', descricao: 'Apresentação'},
        { idfluxodeoportunidade: '4', descricao: 'Proposta' },
        { idfluxodeoportunidade: '5', descricao: 'Negociação' },
        { idfluxodeoportunidade: '6', descricao: 'Conclusão' }
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

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <div className='flex min-h-screen bg-indigo-200 p-8 justify-center'>
      <div className='min-h-100 w-[50%] flex flex-col items-center overflow bg-white rounded-md py-4 mx-8 mb-4'>
        
        <div className='flex m-2 px-8 w-full justify-between items-center'>
          <h1 className='text-md font-medium'>Fluxo de Oportunidade</h1>
          <div className='flex gap-6 items-center'>
            <Button
              onClick={() => { 
                append({
                  idfluxodeoportunidade: nextId.toString(),
                  descricao: 'teste'
                });
                setNextId(nextId + 1);
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
        
        <div className='px-4 py-2 w-[80%] m-4 border rounded-lg'>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Table>
                <TableHeader>
                  <TableHead>Ordem</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Ações</TableHead>
                </TableHeader>
                {fields.map((field, index) => (
                  <TableRow className='border-b-0' key={field.id}>
                    <TableCell>{field.idfluxodeoportunidade}</TableCell>
                    <TableCell>
                      <FormField
                        control={control}
                        name={`flow.${index}.descricao`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )} />
                    </TableCell>
                    <TableCell>
                      <button title='Apagar'>
                        <Trash2Icon
                          onClick={() => remove(index)}
                          size={26} 
                          className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'/>
                      </button>              
                    </TableCell>
                  </TableRow>
                ))}
              </Table>
            </form>
          </Form>
          <p>{ errors.flow?.message }</p>
        </div>
      </div>
    </div>
  );
};

export default OpportunityFlow;
