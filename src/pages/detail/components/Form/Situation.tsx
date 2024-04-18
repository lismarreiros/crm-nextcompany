import { Button } from '@/components/shadcn/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/shadcn/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select';
import { Textarea } from '@/components/shadcn/ui/textarea';
import negocio from '@/validations/schemas/negocio';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

const Situation = () => {
  const { control, getValues } = useFormContext();
  const [showReasonField, setShowReasonField] = useState(false);
  const form = useForm<z.infer<typeof negocio>>({
    resolver: zodResolver(negocio),
  });
      
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = form.getValues();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 py-2 px-2'>

        {/** Situação */}
        <FormField
          control={control}
          name='situacao'
          render={({ field }) => (
            <FormItem className=''>
              <FormLabel className='text-slate-900'>Situação</FormLabel>
              <Select defaultValue="Aberta" onValueChange={(value) => {
                field.onChange(value);
                if (value === 'Perdeu') {
                  setShowReasonField(true);
                } else {
                  setShowReasonField(false);
                }
              }}>
                <FormControl>
                  <SelectTrigger className='bg-slate-50 hover:bg-slate-100 hover:text-slate-900 focus:bg-white text-muted-foreground'>
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Aberta">Aberta</SelectItem>
                  <SelectItem value="Perdeu">Perdeu</SelectItem>
                  <SelectItem value="Ganhou">Ganhou</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        {showReasonField && (
          <FormField
            control={control}
            name='motivo'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-slate-900'>Motivo</FormLabel>
                <Textarea
                  {...field}
                  placeholder='Informe o motivo'
                  className='bg-slate-50 text-muted-foreground hover:bg-slate-100 focus:bg-white'
                />
              </FormItem>
            )}
          />
        )}
        <Button onClick={(e) => {
          e.preventDefault();
          const values = getValues();
          console.log(values);
        }} type='submit' variant='outline' className='mt-2 w-1/3 self-end'>Salvar Alterações</Button>
      </form>
    </div>
  );
};

export default Situation;
