/* eslint-disable no-extra-boolean-cast */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/shadcn/ui/input';

import { BoxIcon, PlusIcon } from 'lucide-react';
import { Button } from '@/components/shadcn/ui/button';
import CustomInputCurrencyMask from '../../../utils/customInputCurrencyMask';

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '@/components/shadcn/ui/form';
import { Textarea } from '@/components/shadcn/ui/textarea';

type ProductFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onProductSubmit: (data: any) => void;
};

const schema = z.object({
  nome: z.string(),
  codprod: z.string(),
  valor: z.string(),
  descricao: z.string()
});

export const ProductForm: React.FC<ProductFormProps> = ({ onProductSubmit }) => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = form.getValues();
    onProductSubmit(data); 
    setOpen(false);
  };

  const currencyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    e.target.value = CustomInputCurrencyMask.valor(value);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className='relative -top-2 border-l-2 border-indigo-100 rounded-b m-2 px-2'>
          <Button variant='ghost' className='gap-1 mt-2 hover:bg-indigo-100'> 
            <PlusIcon size={12}/> 
          Adicionar Produto
          </Button>
        </div>
      </DialogTrigger> 
      <DialogContent className='w-4/5 h-[60%]'> 
        <DialogHeader>
          <DialogTitle>
            <div className='flex items-center gap-2'>
              <BoxIcon  size={22} />
                Novo Produto
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Começo do Formulário */}
        <Form {...form}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className='grid gap-4 pt-2'>

              {/* nome */}
              <FormField
                control={form.control}
                name='nome'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Produto</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Digite o nome"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* descrição */}
              <FormField
                control={form.control}
                name='descricao'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Digite o nome"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* valor */}
              <FormField
                control={form.control}
                name='valor'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Valor</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o valor"
                        onChange={(e) => {
                          currencyInputChange(e);
                          field.onChange(e);
                        }} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>
            <DialogFooter>
              <Button type='submit' className='bg-indigo-700'>Cadastrar Produto</Button>
            </DialogFooter>
          </form>
        </Form> 
      </DialogContent> 
    </Dialog>
  
  );
};
