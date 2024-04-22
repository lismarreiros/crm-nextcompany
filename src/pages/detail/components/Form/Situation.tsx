import { Button } from '@/components/shadcn/ui/button';
import { Calendar } from '@/components/shadcn/ui/calendar';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/shadcn/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shadcn/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { cn } from '@/lib/utils';
import negocio from '@/validations/schemas/negocio';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

const Situation = () => {
  const { control, getValues } = useFormContext();
  const [showReasonField, setShowReasonField] = useState(false);
  const [showCloseDate, setShowCloseDate] = useState(false);
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
                setShowReasonField(value === 'Perdeu');
                setShowCloseDate(value === 'Ganhou');
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

        {showCloseDate && (
          <FormField
            control={control}
            name='dtfechamento'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-slate-900 pb-2.5'>Data Fechamento</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal bg-slate-50 focus:bg-white text-muted-foreground',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP', {locale: ptBR})
                        ) : (
                          <span>Escolha uma data</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date() 
                      }
                      initialFocus
                      locale={ptBR}
                    />
                  </PopoverContent>
                </Popover>
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
