/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/shadcn/ui/input';

import { Box, Plus } from 'lucide-react';
import { Button } from '@/components/shadcn/ui/button';
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
  valor: z.coerce.number()
});

export const ProductForm = () => {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => console.log(data);
  
  return (
    <Dialog>
      <DialogTrigger asChild>
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
                      <Input placeholder="Digite o valor" {...field} />
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

