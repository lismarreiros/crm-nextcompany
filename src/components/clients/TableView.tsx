import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import InnerTable from './InnerTable';
import { ChevronDown, Edit, Trash2 } from 'lucide-react';
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
                  <CollapsibleTrigger asChild>
                    <div><ChevronDown size={10}/></div>
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <Trash2 size={16}/>
                    <Edit size={16}/>
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
                    <div><ChevronDown size={10}/></div>
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <Trash2 size={16}/>
                    <Edit size={16}/>
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
                    <div><ChevronDown size={10}/></div>
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <Trash2 size={16}/>
                    <Edit size={16}/>
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
                    <div><ChevronDown size={10}/></div>
                  </CollapsibleTrigger>
                </TableCell>
                <TableCell>
                  <div className='flex gap-2'>
                    <Trash2 size={16}/>
                    <Edit size={16}/>
                  </div>
                </TableCell>
              </TableRow>
              <CollapsibleContent asChild>
                <InnerTable />
              </CollapsibleContent>
            </>
          </Collapsible>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
