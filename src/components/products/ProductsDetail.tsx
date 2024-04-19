import { Dialog, DialogContent, DialogTrigger } from '@/components/shadcn/ui/dialog';
import { EditIcon,  Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';

interface ProductFormData {
  nome: string;
  descricao: string;
  valor: string;
  codprod: string;
}

type ProductsDetailProps = {
  data: ProductFormData[];
}

const ProductsDetail: React.FC<ProductsDetailProps> = ({ data }) => {
  const [openDialogs, setOpenDialogs] = useState<boolean[]>(new Array(data.length).fill(false));

  const handleOpenChange = (index: number) => {
    const newOpenDialogs = [...openDialogs];
    newOpenDialogs[index] = !newOpenDialogs[index];
    setOpenDialogs(newOpenDialogs);
  };

  return (
    <div className='border-l-2 border-indigo-100 p-4'>
      {data.map((product, index) => (
        <Dialog open={openDialogs[index]} onOpenChange={() => handleOpenChange(index)} key={index}>
          <DialogTrigger className='flex flex-col'>
            <h1 className='text-start hover:border-b border-indigo-200 mt-2'>{product.nome}</h1>
          </DialogTrigger>
          <DialogContent className='h-[35%]'>
            <div>
              <h1 className='font-bold text-lg mb-6'>{product.nome}</h1>
              <div className='flex flex-col gap-1 mb-4'>
                <h1 className='text-xs font-medium'>Descrição</h1>
                <h1 className='font-light font-medium'>{product.descricao}</h1>
              </div>
              <div className='flex flex-col gap-1 mb-4'>
                <h1 className='text-xs'>Valor</h1>
                <h1 className='font-light font-medium'>{product.valor}</h1>
              </div>
              <div className='flex items-center gap-2 justify-end'>
                <button title='Editar'>
                  <EditIcon size={26} className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1' />
                </button>
                <button title='Excluir'>
                  <Trash2Icon 
                    size={26} 
                    className='bg-indigo-50 hover:bg-indigo-200 rounded-md p-1'
                  
                  />
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ProductsDetail;
