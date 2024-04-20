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

type ProductsDetailProps = {
  data: ProductFormData[];
  onProductDelete: (index: number) => void;
}

const ProductsDetail: React.FC<ProductsDetailProps> = ({ data, onProductDelete }) => {

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
    // <div className='border-l-2 border-indigo-100 p-4'>
    //   {data.map((product, index) => (
    //     <Dialog >
    //       <DialogTrigger className='flex flex-col'>
    //         <h1 className='text-start hover:border-b border-indigo-200 mt-2'>{product.nome}</h1>
    //       </DialogTrigger>
    //       <DialogContent className='h-[45%]'>
    //         <div>
    //           <h1 className='font-bold text-lg mb-6'>{product.nome}</h1>
    //           <div className='flex flex-col gap-1 mb-4'>
    //             <h1 className='text-xs font-medium'>Descrição</h1>
    //             <h1 className='font-light font-medium'>{product.descricao}</h1>
    //           </div>
    //           <div className='flex flex-col gap-1 mb-4'>
    //             <h1 className='text-xs'>Valor</h1>
    //             <h1 className='font-light font-medium'>{product.valor}</h1>
    //           </div>
    //           <div className='flex flex-col gap-1 mb-4'>
    //             <h1 className='text-xs'>Alíquota de Comissão</h1>
    //             <h1 className='font-light font-medium'>{product.comissao}%</h1>
    //           </div>
    //           <div className='flex items-center gap-2 justify-end'>
    //             <button title='Editar'>
    //               <EditIcon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1' />
    //             </button>
    //             <button title='Excluir'>
    //               <Trash2Icon
    //                 onClick={() => onProductDelete(index)}
    //                 size={26} 
    //                 className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'
                  
  //               />
  //             </button>
  //           </div>
  //         </div>
  //       </DialogContent>
  //     </Dialog>
  //   ))}
  // </div>
  );
};

export default ProductsDetail;
