import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import InnerTable from './InnerTable';
import { ChevronDown } from 'lucide-react';
import Constants from '@/constants';

const TableView = () => {
  const dados = [
    'Empresa Abc',
    '111.111.111.11/1111',
    'Empresa Abc ltda',
    'Serviço'
  ];

  return (
    <div className='m-2 rounded-md sm:border'>
      <Table>
        <TableHeader>
          <TableRow>
            {Constants.LISTA_COLUNAS_CLIENTES.map((coluna) => (
              <TableHead key={coluna}>{coluna}</TableHead>
            ))}
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
