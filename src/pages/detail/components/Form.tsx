import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, 
  FormControl, 
  FormField, 
  FormLabel, 
  FormItem, 
  FormMessage } from '@/components/shadcn/ui/form';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/shadcn/ui/select';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shadcn/ui/button';
import { Calendar } from '@/components/shadcn/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn/ui/popover';
import { Input, InputMasks } from '@/components/shadcn/ui/input';
import { Command, 
  CommandInput, 
  CommandGroup, 
  CommandEmpty, 
  CommandItem, 
  CommandList } from '@/components/shadcn/ui/command';
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

const schema = z.object({
  client: z.string(),
  produto: z.string(),
  tel: z.string(),
  descricao: z.string(),
  dataprevisao: z.date(),
  participantes: z.string(),
  idindicador: z.string(),
  situacao: z.string(),
});

const onSubmit = async (data: z.infer<typeof schema>) => {
  console.log(data);
};

function FormDetalhe() {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div className='bg-slate-50 p-4 border border-2 rounded lg'>
      <div className='flex gap-1 items-center border-b-2 mb-4 justify-between p-2'>
        <p className='text-md font-medium'>Detalhes</p>
        <div className='flex gap-6 px-2'>
          <div className='gap-2 items-end'>
            <p className='text-xs text-end'>Ínicio</p>
            <p className='text-sm font-medium'>12/12/2022</p>
          </div>
          <div className='gap-2 items-end'>
            <p className='text-xs text-end'>Valor</p>
            <p className='text-sm font-medium'>R$ 00.00</p>
          </div>
        </div>
      </div> 

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='py-2 flex flex-col gap-6'>

          {/** Cliente */}
          <div className='flex items-center justify-start gap-6'>
            <FormField
              control={form.control}
              name='client'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className='text-slate-900 min-w-[15vw] pb-2.5'>Cliente</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          aria-expanded={open}
                          variant='outline' 
                          role='combobox'
                          className={cn('w-full h-10 justify-between bg-slate-50 focus:bg-white text-muted-foreground',
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
                                  form.setValue('client', client.value);
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

            {/** Produtos */}
            <FormField
              control={form.control}
              name='produto'
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel className='text-slate-900 pb-2.5'>Produto</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className='min-w-[15vw] bg-slate-50 hover:bg-slate-100 focus:bg-white hover:text-slate-900 text-muted-foreground'>
                        <SelectValue placeholder="Selecione um produto" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="wCompany">wCompany</SelectItem>
                      <SelectItem value="iCompany">iCompany</SelectItem>
                      <SelectItem value="xPDV">xPDV</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='flex items-center justify-start gap-6'>
            {/** Data da Previsão */}
            <FormField
              control={form.control}
              name="dataprevisao"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className='text-slate-900 pb-2.5'>Data de Previsão</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'w-full min-w-[15vw] pl-3 text-left font-normal bg-slate-50 focus:bg-white text-muted-foreground',
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
                  <FormMessage />
                </FormItem>
              )}
            />
            {/** Número do telefone */}
            <FormField
              control={form.control}
              name='tel'
              render={({ field }) => (
                <FormItem className='flex flex-col w-[15vw]'>
                  <FormLabel className='text-slate-900 pb-2.5'>Telefone</FormLabel>
                  <FormControl>
                    <InputMasks
                      {...field}
                      className='bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white'
                      mask="(99) 99999-9999"
                      placeholder="Digite o número"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
                  
          {/** Descrição */}
          <FormField
            control={form.control}
            name="descricao"
            render={({ field }) => (
              <FormItem className='flex flex-col w-[32vw]'>
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
          {/** Participantes */}
          <FormField
            control={form.control}
            name="participantes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-slate-900'>Participantes</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="resize-none text-muted-foreground bg-slate-50 hover:bg-slate-100 hover:text-slate-900  focus:bg-white"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/** Origem */}
          <FormField
            control={form.control}
            name="idindicador"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-slate-900'>Origem</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="resize-none bg-slate-50 hover:bg-slate-100 focus:bg-white hover:text-slate-900 text-muted-foreground"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/** Situação */}
          <FormField
            control={form.control}
            name='situacao'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-slate-900'>Situação</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className='bg-slate-50 hover:bg-slate-100 hover:text-slate-900 focus:bg-white text-muted-foreground'>
                      <SelectValue placeholder="Selecione a situação" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Aberta">Aberta</SelectItem>
                    <SelectItem value="Perdeu">Perdeu</SelectItem>
                    <SelectItem value="Ganhou">Ganhou</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Button type='submit' className='mt-2 w-4/6 self-center bg-indigo-700'>Salvar Alterações</Button> */}
        </form>
      </Form>
    </div>
  );
}

export default FormDetalhe;
