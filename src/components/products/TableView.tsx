import { EditIcon,    Trash2Icon } from 'lucide-react';
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../shadcn/ui/table';
import Constants from '@/constants';

interface ProductFormData {
  nome: string;
  descricao: string;
  valor: string;
  codprod: string;
  comissao: string;
}

type ProductsProps = {
  data: ProductFormData[];
  onProductDelete: (index: number) => void;
}

const TableView: React.FC<ProductsProps> = ({ data, onProductDelete }) => {

  return (
    <div className='m-4 rounded-md sm:border'>
      <Table>
        <TableHeader>
          <TableRow>
            {Constants.LISTA_COLUNAS_PRODUTOS.map((coluna) => (
              <TableHead className='h-10' key={coluna}>{coluna}</TableHead>
            ))}
            <TableHead colSpan={2}>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((produto, index) => (
            <TableRow key={index}>
              <TableCell>{produto.nome}</TableCell>
              <TableCell>{produto.descricao}</TableCell>
              <TableCell>{produto.valor}</TableCell>
              <TableCell>{produto.comissao}%</TableCell>
              <TableCell>
                <div className='flex gap-2'>
                  <button title='Apagar'>
                    <Trash2Icon 
                      onClick={() => onProductDelete(index)} 
                      size={26} 
                      className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'
                    />
                  </button>
                  <button title='Editar'>
                    <EditIcon
                      size={26}
                      className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'
                    />
                  </button>
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
