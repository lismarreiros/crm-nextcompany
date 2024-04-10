import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/shadcn/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import Constants from '@/constants';
import { Button } from '../shadcn/ui/button';
import { ArrowUpRight, Edit, Trash2 } from 'lucide-react';

const ClientDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button variant='link' size='sm'> 
            <ArrowUpRight size={ 16}/>
            Visualizar Clientes
          </Button>
        </DialogTrigger> 
        <DialogContent className='max-w-[94vw] h-[60%] gap-1'> 
          <DialogHeader className='p-0 m-0'>
            <DialogTitle>
              Tabela de Clientes
            </DialogTitle>
          </DialogHeader>
      
          <div className='rounded'>
            <Table className='px-1 overflow-x-hidden'>
              <TableCaption>paginação aqui</TableCaption>
              <TableHeader>
                {Constants.LISTA_COLUNAS_CLIENTES.map((coluna) => (
                  <TableHead className='text-xs' key={coluna}>{coluna}</TableHead>
                ))}
                <TableHead></TableHead>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-xs">123.456.789-10</TableCell>
                  <TableCell className='text-xs'>Empresa A</TableCell>
                  <TableCell className='text-xs'>Empresa A Ltda</TableCell>
                  <TableCell className='text-xs'>Tecnologia</TableCell>
                  <TableCell className='text-xs'>João Silva</TableCell>
                  <TableCell className='text-xs'>(11) 1234-5678</TableCell>
                  <TableCell className='text-xs'>(11) 1234-9875</TableCell>
                  <TableCell className='text-xs'>contato@empresa.com</TableCell>
                  <TableCell className='text-xs'>CEO</TableCell>
                  <TableCell className='text-xs'>093123-45</TableCell>
                  <TableCell className='text-xs'>Centro</TableCell>
                  <TableCell className='text-xs'>Rua da Empresa, 123</TableCell>
                  <TableCell className='text-xs'>São Paulo</TableCell>
                  <TableCell className='text-xs'>SP</TableCell>
                  <TableCell className='text-xs'>123</TableCell>
                  <TableCell className='flex gap-2'>
                    <button title='Apagar'>
                      <Trash2 size={14}/> 
                    </button>
                    <button title='Editar'>
                      <Edit size={14}/>
                    </button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientDialog;
