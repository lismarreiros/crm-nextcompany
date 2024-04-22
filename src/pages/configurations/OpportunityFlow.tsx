import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { Input } from '@/components/shadcn/ui/input';
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';
// import fluxodeoportunidade from '@/validations/schemas/fluxodeoportunidade';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
// import { z } from 'zod';

const OpportunityFlow = () => {
  const [flowValues, setFlowValues] = useState([
    { idfluxodeoportunidade: 1, descricao: 'Prospecção' },
    { idfluxodeoportunidade: 2, descricao: 'Qualificação' },
    { idfluxodeoportunidade: 3, descricao: 'Apresentação'},
    { idfluxodeoportunidade: 4, descricao: 'Proposta' },
    { idfluxodeoportunidade: 5, descricao: 'Negociação' },
    { idfluxodeoportunidade: 6, descricao: 'Conclusão' }
  ]);

  // const { register, handleSubmit } = useForm<z.infer<typeof fluxodeoportunidade>>({
  //   resolver: zodResolver(fluxodeoportunidade),
  // });

  // const onSubmit: SubmitHandler<z.infer<typeof fluxodeoportunidade>> = (data) => console.log(data);

  const handleAdd = () => {
    setFlowValues([...flowValues, {
      idfluxodeoportunidade: flowValues.length + 1, descricao: ''
    }]);
  };
  
  const handleDelete = (idfluxodeoportunidade: number) => {
    const listFlow = [...flowValues];
    listFlow.splice(idfluxodeoportunidade, 1);
    setFlowValues(listFlow);
  };

  return (
    <div className='flex min-h-screen bg-indigo-200 p-8 justify-center'>
      <div className='min-h-100 w-[50%] flex flex-col items-center overflow bg-white rounded-md py-4 mx-8 mb-4'>
        
        <div className='flex m-2 px-8 w-full justify-between items-center'>
          <h1 className='text-md font-medium'>Fluxo de Oportunidade</h1>
          <div className='flex gap-6 items-center'>
            <Button
              onClick={handleAdd}
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
          <Table>
            <TableHeader>
              <TableHead>Ordem</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead >Ações</TableHead>
            </TableHeader>
            {flowValues.map((flow, index) => (
              <TableRow className='border-b-0' key={index}>
                <TableCell>{flow.idfluxodeoportunidade}</TableCell>
                <TableCell>
                  <Input
                    {...register}
                    value={flow.descricao}
                    onChange={(e) => {
                      const newValues = [...flowValues];
                      newValues[index].descricao = e.target.value;
                      setFlowValues(newValues);
                    }}
                  />
                </TableCell>
                <TableCell>
                  <button title='Apagar'>
                    <Trash2Icon
                      onClick={() => handleDelete(index)}
                      size={26} 
                      className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'/>
                  </button>                
                </TableCell>
              </TableRow>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default OpportunityFlow;
