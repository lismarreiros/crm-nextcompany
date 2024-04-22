import TableView from '@/components/leads/TableView';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import React, { useState } from 'react';

interface LeadFormData {
  id: string;
  descricao: string;
  telefone: string;
  idfluxodeoportunidade: string;
  dtinicio: string;
  previsao: string;
  dtfechamento: string;
  valor: string;
  feedback: string;
}
const LeadPage = () => {
  const [leads, setLeads] = useState<LeadFormData[]>([
    {
      id: '001',
      descricao: 'Centro Musical',
      telefone: '86 99988-8888',
      idfluxodeoportunidade: 'Qualificação',
      dtinicio: '12/02/2024',
      previsao: '23/06/2024',
      dtfechamento: '21/05/2024',
      valor: 'R$ 999,99',
      feedback: 'Bom trabalho!'
    }
  ]);

  const handleLeadDelete = (index: number) => {
    const listLead = [...leads];
    listLead.splice(index, 1);
    setLeads(listLead);
  };

  return (
    <div className='min-h-screen bg-indigo-200 p-8'>
      <div className='min-h-100 flex flex-col overflow bg-white rounded-md py-4 mx-8 mb-4 '>   
        <div className='flex m-2 justify-between items-center pr-2'>
          <h1 className='m-4 text-md font-medium'>Negócios</h1>
          <div className='flex gap-6'>
            <Command className='flex items-center rounded-lg border-2 p-1 gap-1'>
              <CommandInput placeholder="Pesquisar..."/>
            </Command>
          </div>
        </div>
        <TableView
          data={leads}
          onLeadDelete={handleLeadDelete}
        />
        <div>
    
        </div>
      </div>
    </div>
  );
};

export default LeadPage;
