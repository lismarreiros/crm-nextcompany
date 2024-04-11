import { Dialog, DialogContent, DialogTrigger } from '@/components/shadcn/ui/dialog';
import { EditIcon,  Trash2Icon } from 'lucide-react';
import React, { useState } from 'react';

const ProductsTable = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <h1 className='hover:border-b border-indigo-200'>wCompany</h1>
        </DialogTrigger>
        <DialogContent className='h-[35%] bg-slate-100'>
          <div>
            <h1 className='font-medium text-md mb-6'>wCompany</h1>
            <div className='flex flex-col gap-1 mb-4'>
              <h1 className='text-sm font-medium'>Descrição</h1>
              <h1 className='text-sm font-light'>Aplicativo de gerenciamento comercial</h1>
            </div>
            <div className='flex flex-col gap-1 mb-4'>
              <h1 className='text-sm font-medium'>Valor</h1>
              <h1 className='text-sm font-light'>R$ 222,22</h1>
            </div>
            <div className='flex items-center gap-2'>
              <button title='Editar'>
                <EditIcon size={28} className='hover:bg-indigo-200 rounded-md p-1' />
              </button>
              <button title='Excluir'>
                <Trash2Icon size={28} className='hover:bg-indigo-200 rounded-md p-1'/>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsTable;
