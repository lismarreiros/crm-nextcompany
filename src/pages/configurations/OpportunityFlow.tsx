import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { Input } from '@/components/shadcn/ui/input';
import { Table, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';

const listFlow = [
  'Prospecção',
  'Qualificação',
  'Apresentação',
  'Proposta',
  'Negociação',
  'Conclusão'
];

const OpportunityFlow = () => {
  const [flowValues, setFlowValues] = useState(listFlow);

  const addEmptyInput = () => {
    setFlowValues([...flowValues, '']);
  };

  const handleDelete = (index: number) => {
    const listFlow = [...flowValues];
    listFlow.splice(index, 1);
    setFlowValues(listFlow);
  };

  return (
    <div className='flex min-h-screen bg-indigo-200 p-8 justify-center'>
      <div className='min-h-100 w-[50%] flex flex-col items-center overflow bg-white rounded-md py-4 mx-8 mb-4'>
        
        <div className='flex m-2 px-8 w-full justify-between items-center'>
          <h1 className='text-md font-medium'>Fluxo de Oportunidade</h1>
          <div className='flex gap-6 items-center'>
            <Button
              onClick={() => addEmptyInput}
              variant='ghost' 
              className='gap-1 p-4 bg-indigo-50 hover:bg-indigo-200'> 
              <PlusIcon size={12}/> Adicionar 
            </Button>
            <Command className='flex items-center rounded-lg border-2 p-1 gap-1'>
              <CommandInput placeholder='Pesquisar'/>
            </Command>
          </div>
        </div>
        
        <div className='p-1 w-[80%] m-4 border rounded-lg'>
          <Table>
            <TableHeader>
              <TableHead>Descrição</TableHead>
              <TableHead >Ações</TableHead>
            </TableHeader>
            {flowValues.map((flow, index) => (
              <TableRow className='border-b-0' key={index}>
                <TableCell>
                  <Input
                    value={flow}
                    onChange={(e) => {
                      const newValues = [...flowValues];
                      newValues[index] = e.target.value;
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
