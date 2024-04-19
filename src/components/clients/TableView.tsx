import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import InnerTable from './InnerTable';
import { ChevronDownIcon, EditIcon, Trash2Icon } from 'lucide-react';
import Constants from '@/constants';
import { Badge } from '../shadcn/ui/badge';
interface ClientFormData {
  nomefantasia: string;
  razao: string;
  ramo: string;
  status: string;
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
  cpfOrCnpj: string;
}

type TableViewProps = {
  data: ClientFormData[];
}

const TableView: React.FC<TableViewProps> = ({ data }) => {
  return (
    <div className='m-4 rounded-md sm:border'>
      <Table>
        <TableHeader>
          <TableRow className=''>
            {Constants.LISTA_COLUNAS_CLIENTES.map((coluna) => (
              <TableHead className='h-10' key={coluna}>{coluna}</TableHead>
            ))}
            <TableHead colSpan={2}>Ações</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((cliente, index) => (
            <Collapsible asChild key={index}>
              <>
                <TableRow>
                  <CollapsibleTrigger asChild title='Mostrar Detalhes'>
                    <div className='px-2 flex items-center space-x-1 [&[data-state=open]>svg.chevron]:rotate-180'>
                      <ChevronDownIcon className="h-4 w-4 bg-indigo-50 hover:bg-indigo-200 rounded text-muted-foreground shrink-0 transition-transform duration-200 ease-in-out chevron" />
                      <TableCell>{cliente.nomefantasia}</TableCell>
                    </div> 
                  </CollapsibleTrigger>
                  <TableCell>{cliente.cpfOrCnpj}</TableCell>
                  <TableCell>{cliente.razao}</TableCell>
                  <TableCell>{cliente.ramo}</TableCell>
                  <TableCell> 
                    <Badge className={cliente.status === 'Ativo' ? 'text-green-600 font-light bg-green-200 hover:bg-green-200' : 'text-red-600 font-light bg-red-200 hover:bg-red-200'}>{cliente.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className='flex gap-2'>
                      <button title='Apagar'>
                        <Trash2Icon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'/>
                      </button>
                      <button title='Editar'>
                        <EditIcon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'/>
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
                <CollapsibleContent asChild>
                  <InnerTable dataContato={cliente} />
                </CollapsibleContent>
              </>
            </Collapsible>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
