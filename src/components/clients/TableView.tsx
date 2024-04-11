import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import InnerTable from './InnerTable';
import { ChevronDownIcon, Edit, EditIcon, Trash2Icon } from 'lucide-react';
import Constants from '@/constants';

const TableView = () => {
  const dados = [
    'Empresa Abc',
    '111.111.111.11/1111',
    'Empresa Abc ltda',
    'Serviço',
  ];

  return (
    <div className='m-4 rounded-md sm:border'>
      <Table>
        <TableHeader>
          <TableRow>
            {Constants.LISTA_COLUNAS_CLIENTES.map((coluna) => (
              <TableHead key={coluna}>{coluna}</TableHead>
            ))}
            <TableHead></TableHead>
            <TableHead></TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <Collapsible asChild>
            <>
              <TableRow>
                {dados.map((dado) => (
                  <TableCell key={dado}>{dado}</TableCell>
                ))}
                <TableCell colSpan={2}>
                  <CollapsibleTrigger asChild title='Mostrar Detalhes'>
                    <div className='flex items-center space-x-1 [&[data-state=open]>svg.chevron]:rotate-180'>
                      <ChevronDownIcon className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ease-in-out chevron" />
                    </div> 
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <button title='Apagar'>
                      <Trash2Icon size={24} className='hover:bg-indigo-200 rounded-md p-1'/>
                    </button>
                    <button title='Editar'>
                      <Edit size={24} className='hover:bg-indigo-200 rounded-md p-1'/>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
              <CollapsibleContent asChild>
                <InnerTable />
              </CollapsibleContent>
            </>
          </Collapsible>

          {/** APAGAR A PARTIR DAQUI - APENAS PARA TESTE */}
          <Collapsible asChild>
            <>
              <TableRow>
                {dados.map((dado) => (
                  <TableCell key={dado}>{dado}</TableCell>

                ))}
                <TableCell colSpan={2}>
                  <CollapsibleTrigger asChild>
                    <div className='flex items-center space-x-1 [&[data-state=open]>svg.chevron]:rotate-180'>
                      <ChevronDownIcon className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ease-in-out chevron" />
                    </div> 
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <Trash2Icon size={24} className='hover:bg-indigo-200 rounded-md p-1' />
                    <EditIcon size={24} className='hover:bg-indigo-200 rounded-md p-1' />
                  </div>
                </TableCell>
              </TableRow>
              <CollapsibleContent asChild>
                <InnerTable />
              </CollapsibleContent>
            </>
          </Collapsible>

          <Collapsible asChild>
            <>
              <TableRow>
                {dados.map((dado) => (
                  <TableCell key={dado}>{dado}</TableCell>

                ))}
                <TableCell colSpan={2}>
                  <CollapsibleTrigger asChild>
                    <div className='flex items-center space-x-1 [&[data-state=open]>svg.chevron]:rotate-180'>
                      <ChevronDownIcon className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ease-in-out  chevron" />
                    </div> 
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <Trash2Icon size={24} className='hover:bg-indigo-200 rounded-md p-1'/>
                    <EditIcon size={24} className='hover:bg-indigo-200 rounded-md p-1'/>
                  </div>
                </TableCell>
              </TableRow>
              <CollapsibleContent asChild>
                <InnerTable />
              </CollapsibleContent>
            </>
          </Collapsible>

          <Collapsible asChild>
            <>
              <TableRow>
                {dados.map((dado) => (
                  <TableCell key={dado}>{dado}</TableCell>

                ))}
                <TableCell colSpan={2}>
                  <CollapsibleTrigger asChild>
                    <div className='flex items-center space-x-1 [&[data-state=open]>svg.chevron]:rotate-180'>
                      <ChevronDownIcon className="h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ease-in-out chevron" />
                    </div> 
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <Trash2Icon size={24} className='hover:bg-indigo-200 rounded-md p-1'/>
                    <EditIcon size={24} className='hover:bg-indigo-200 rounded-md p-1'/>
                  </div>
                </TableCell>
              </TableRow>
              <CollapsibleContent asChild>
                <InnerTable />
              </CollapsibleContent>
            </>
          </Collapsible>
          {/** APAGAR ATÉ AQUI!!  */}

        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
