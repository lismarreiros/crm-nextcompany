import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../shadcn/ui/table';
import Constants from '@/constants';
import { EditIcon, Trash2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

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

type TableViewProps ={
    data: LeadFormData[];
    onLeadDelete: (index: number) => void;
}

const TableView: React.FC<TableViewProps> = ({ data, onLeadDelete }) => {
  return (
    <div className='m-4 rounded-md sm:border'>
      <Table>
        <TableHeader>
          <TableRow>
            {Constants.LISTA_COLUNAS_NEGOCIOS.map((coluna) => (
              <TableHead className='h-10' key={coluna}>{coluna}</TableHead>
            ))}
            <TableHead colSpan={2}>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((negocio, index) => (
            <TableRow key={index}>
              <TableCell>{negocio.id}</TableCell>
              <TableCell>{negocio.descricao}</TableCell>
              <TableCell>{negocio.telefone}</TableCell>
              <TableCell>{negocio.idfluxodeoportunidade}</TableCell>
              <TableCell>{negocio.dtinicio}</TableCell>
              <TableCell>{negocio.previsao}</TableCell>
              <TableCell>{negocio.dtfechamento}</TableCell>
              <TableCell>{negocio.valor}</TableCell>
              <TableCell>{negocio.feedback}</TableCell>
              <TableCell>
                <div className='flex gap-2 items-baseline'>
                  <button title='Apagar'>
                    <Trash2Icon onClick={() => onLeadDelete(index)} size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'/>
                  </button>
                  <Link to='/detalhe'>
                    <button title='Editar'>
                      <EditIcon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'/>
                    </button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
