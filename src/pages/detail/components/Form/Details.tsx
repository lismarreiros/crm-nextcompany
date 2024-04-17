import { useFormContext } from 'react-hook-form';
import { FormControl, FormField, 
  FormLabel, FormItem, } from '@/components/shadcn/ui/form';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shadcn/ui/button';
import { Calendar } from '@/components/shadcn/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shadcn/ui/popover';
import { Input, InputMasks } from '@/components/shadcn/ui/input';
import { Command, CommandInput, CommandGroup, 
  CommandEmpty, CommandItem, CommandList } from '@/components/shadcn/ui/command';
import { useState } from 'react';

const clients = [
  { label: 'Empresa A', value: 'en' },
  { label: 'Empresa B', value: 'fr' },
  { label: 'Empresa C', value: 'de' },
  { label: 'Empresa D', value: 'es' },
  { label: 'Empresa E', value: 'pt' },
  { label: 'Empresa F', value: 'ru' },
  { label: 'Empresa G', value: 'ja' },
  { label: 'Empresa H', value: 'ko' },
  { label: 'Empresa I', value: 'zh' },
] as const;
  
const Details = () => {
  const { control, getValues } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/** Descrição */}
      <form className='py-2 px-2 flex flex-col gap-4'>
        <FormField
          control={control}
          name="descricao"
          render={({ field }) => (
            <FormItem className='flex flex-col w-full'>
              <FormLabel className='text-slate-900 pb-2.5'>Descrição</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Descrição"
                  className="resize-none text-muted-foreground bg-slate-50 hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/** Cliente */}
        <div className='flex items-center justify-start gap-2'>
          {/** Número do telefone */}
          <FormField
            control={control}
            name='tel'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/2'>
                <FormLabel className='text-slate-900 pb-2.5'>Telefone</FormLabel>
                <FormControl>
                  <InputMasks
                    {...field}
                    className='bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:text-slate-900 hover:text-slate-900 focus:bg-white'
                    mask="(99) 99999-9999"
                    placeholder="Digite o número"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name='client'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/2'>
                <FormLabel className='text-slate-900 pb-2.5'>Cliente</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        aria-expanded={open}
                        variant='outline' 
                        role='combobox'
                        className={cn('w-full h-10 justify-between bg-slate-50 focus:bg-white text-muted-foreground font-normal',
                          !field.value && 'text-muted-foreground font-normal'
                        )}>
                        {field.value 
                          ? clients.find(
                            (client) => client.value === field.value
                          )?.label
                          : 'Selecione um cliente'
                        }
                        <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-inherit p-0'>
                    <Command>
                      <CommandInput placeholder='Procure um cliente' />
                      <CommandEmpty>Não encontrado</CommandEmpty>
                      <CommandList>
                        <CommandGroup>
                          {clients.map((client) => (
                            <CommandItem 
                              value={client.label}
                              key={client.value}
                              onSelect={() => {
                                // form.setValue('client', client.value);
                                setOpen(false);
                              }}
                            >
                              <Check
                                className={cn('mr-2 h-4 w-4',
                                  client.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              <span>{client.label}</span>
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormItem>
            )}
          />

        </div>

        <div className='flex items-center justify-start gap-2'>
          {/** Data de Início */}
          <FormField
            control={control}
            name="dtinicio"
            render={({ field }) => (
              <FormItem className="flex flex-col w-1/2">
                <FormLabel className='text-slate-900 pb-2.5'>Data de Início</FormLabel>
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
            
          {/** Data da Previsão */}
          <FormField
            control={control}
            name="previsao"
            render={({ field }) => (
              <FormItem className="flex flex-col w-1/2">
                <FormLabel className='text-slate-900 pb-2.5'>Data de Previsão</FormLabel>
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
            
        </div>

        {/** Participantes */}
        <FormField
          control={control}
          name="participantes"
          render={({ field }) => (
            <FormItem className='flex flex-col w-full'>
              <FormLabel className='text-slate-900 pb-2.5'>Participantes</FormLabel>
              <FormControl>
                <Input
                  placeholder="Convide alguém"
                  className="resize-none text-muted-foreground bg-slate-50 hover:bg-slate-100 hover:text-slate-900  focus:bg-white"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/** Fonte */}
        <FormField
          control={control}
          name="idfontenegocio"
          render={({ field }) => (
            <FormItem className='flex flex-col w-full'>
              <FormLabel className='text-slate-900 pb-2.5'>Fonte</FormLabel>
              <FormControl>
                <Input
                  placeholder=''
                  className="resize-none bg-slate-50 hover:bg-slate-100 focus:bg-white hover:text-slate-900 text-muted-foreground"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button onClick={(e) => {
          e.preventDefault();
          const values = getValues();
          console.log(values);
        }} type='submit' className='mt-2 w-4/6 self-center bg-indigo-700'>Salvar Alterações</Button>
      </form>
    </div>
  );
};

export default Details;
