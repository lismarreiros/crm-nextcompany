/* eslint-disable no-extra-boolean-cast */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/shadcn/ui/input';

import { Box, Plus } from 'lucide-react';
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

{/* validação */}
const schema = z.object({
  nome: z.string(),
  codprod: z.string(),
  valor: z.string()
});

export const ProductForm = () => {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log(data);
    setOpen(false);
  };

  const currencyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    e.target.value = CustomInputCurrencyMask.valor(value);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant='link' size='sm'> 
          <Plus size={16}/> 
          Adicionar Produto
        </Button>
      </DialogTrigger> 
      <DialogContent className='w-4/5 h-[60%]'> 
        <DialogHeader>
          <DialogTitle>
            <div className='flex items-center gap-2'>
              <Box  size={22} />
                Novo Produto
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Começo do Formulário */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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

              {/* codigo */}
              <FormField
                control={form.control}
                name='codprod'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Código do Produto</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite o código" {...field} />
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
              <Button type='submit' variant='default'>Cadastrar Produto</Button>
            </DialogFooter>
          </form>
        </Form> 
      </DialogContent> 
    </Dialog>
  
  );
};
