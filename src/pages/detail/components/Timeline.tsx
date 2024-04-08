import { Button } from '@/components/shadcn/ui/button';
import { Command, CommandInput } from '@/components/shadcn/ui/command';
import { ArrowLeftRight, CalendarCheck2, CalendarPlus, CheckSquare, MessageSquare, SquarePen, Trash2 } from 'lucide-react';
import React from 'react';

function Timeline() {
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
          <Button>Adicionar Tarefa</Button>
          <Button>Adicionar Comentário</Button>
        </div>
      </div>

      {/** cards - Comentário/Tarefa em Aberto/Tarefa Concluída e Troca de Fase*/}
      <div className='relative w-[1000px] h-[110px] border-l-2 border-slate-700	self-center my-4'>
        <div className='absolute  flex items-center size-8 -top-3 -left-4 bg-slate-700 py-1 px-2 rounded-full'>
          <MessageSquare size={18} color='white' />
        </div>

        <div className='flex flex-col m-6 px-2 py-2 bg-white rounded border-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='text-md px-2 py-2'>Comentário | </h1>
              <h1 className='text-xs font-light'> - há 1 dia</h1>
            </div>

            {/** ícones */}
            <div className='flex gap-1 px-2'>
              {/* <SquarePen size={16} /> */}
              <Trash2 size={16}/>
            </div>
        
          </div>
          <h1 className='px-2 py-1 text-sm font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</h1>
        </div>
      </div>

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

      {/** Tarefa Adicionada */}
      <div className='relative w-[1000px] h-[110px] border-l-2 border-slate-700	self-center my-4'>
        <div className='absolute  flex items-center size-8 -top-3 -left-4 bg-slate-700 py-1 px-2 rounded-full'>
          <CalendarPlus size={18} color='white' />
        </div>

        <div className='flex flex-col m-6 px-2 py-2 bg-white rounded border-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='text-md px-2 py-2'>Tarefa Adicionada | </h1>
              <h1 className='text-xs font-light'> - há 1 dia</h1>
            </div>

            {/** ícones */}
            <div className='flex gap-1 px-2'>
              <SquarePen size={16} />
              <CheckSquare size={16} />
              <Trash2 size={16}/>
            </div>
        
          </div>
          <h1 className='px-2 py-1 text-sm font-light'>Mostrar proposta...</h1>
        </div>
      </div>

      {/** Tarefa Concluida */}
      <div className='relative w-[1000px] h-[110px] border-l-2 border-slate-700	self-center my-4'>
        <div className='absolute  flex items-center size-8 -top-3 -left-4 bg-green-700 py-1 px-2 rounded-full'>
          <CalendarCheck2 size={18} color='white' />
        </div>

        <div className='flex flex-col m-6 px-2 py-2 bg-white rounded border-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <h1 className='text-md px-2 py-2'>Tarefa Concluída | </h1>
              <h1 className='text-xs font-light'> - há 1 dia</h1>
            </div>

            {/** ícones */}
            <div className='flex gap-1 px-2'>
              {/* <SquarePen size={16} /> */}
              <Trash2 size={16}/>
            </div>
        
          </div>
          <h1 className='px-2 py-1 text-sm font-light'>Elaborar proposta...</h1>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
