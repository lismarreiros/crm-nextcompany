import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import InnerTable from './InnerTable';
import { ChevronDownIcon, Edit, EditIcon, Trash2Icon } from 'lucide-react';
import Constants from '@/constants';

interface ClientFormData {
  cpfOrCnpj: string;
  nomefantasia: string;
  razao: string;
  ramo: string;
  nomeContato: string;
  celular: string;
  fixo: string;
  email: string;
  funcao: string;
  cep: string;
  rua: string;
  cidade: string;
  uf: string;
  bairro: string;
  numero: string;
}

type TableViewProps = {
  data: ClientFormData;
}

const TableView: React.FC<TableViewProps> = ({ data }) => {
  // const dados = [
  //   'Empresa A',
  //   'Empresa A ltda',
  //   '1111111111',
  //   'Serviços'
  // ];
  const dados = [
    { nomefantasia: data.nomefantasia },
    { cpfOrcnpj: data.cpfOrCnpj },
    { razao: data.razao },
    { nome: data.nomeContato },
    // { celular: data.celular },
    // { fixo: data.fixo },
    // { email: data.email },
    // { funcao: data.funcao },
    // { cep: data.cep },
    // { rua: data.rua },
    // { cidade: data.cidade },
    // { uf: data.uf },
    // { bairro: data.bairro },
    // { numero: data.numero }
  ];

  return (
    <div className='m-4 rounded-md sm:border'>
      <Table>
        <TableHeader>
          <TableRow className=''>
            {Constants.LISTA_COLUNAS_CLIENTES.map((coluna) => (
              <TableHead className='h-10' key={coluna}>{coluna}</TableHead>
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
                {dados.map((dado, index) => (
                  Object.entries(dado).map(([key, value]) => (
                    <TableCell key={key}>{value}</TableCell>
                  ))
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
                {dados.map((dado, index) => (
                  Object.entries(dado).map(([key, value]) => (
                    <TableCell key={key}>{value}</TableCell>
                  ))
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
                {dados.map((dado, index) => (
                  Object.entries(dado).map(([key, value]) => (
                    <TableCell key={key}>{value}</TableCell>
                  ))
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
                {dados.map((dado, index) => (
                  Object.entries(dado).map(([key, value]) => (
                    <TableCell key={key}>{value}</TableCell>
                  ))
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
