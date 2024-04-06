import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '@/components/shadcn/ui/form';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/shadcn/ui/select';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/shadcn/ui/button';
import { Calendar } from '@/components/shadcn/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/shadcn/ui/popover';
import { Input, InputMasks } from '@/components/shadcn/ui/input';

const schema = z.object({
  cliente: z.string(),
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
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div className='bg-white m-2 p-4 border border-2 rounded'>
      <h1 className='text-md font-semibold'>Dados básicos</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='py-2 flex flex-col gap-2'>

          {/** Cliente */}
          <FormField
            control={form.control}
            name='cliente'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cliente</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um cliente" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Julian">Casablancas</SelectItem>
                    <SelectItem value="Axl">Rose</SelectItem>
                    <SelectItem value="Alex">Turner</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/** Produtos */}
          <FormField
            control={form.control}
            name='produto'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Produto</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um ou mais produtos" />
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

          {/** Número do telefone */}
          <FormField
            control={form.control}
            name='tel'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <InputMasks
                    {...field}
                    mask="(99) 99999-9999"
                    placeholder="Digite o número de telefone do contato"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
                
          {/** Descrição */}
          <FormField
            control={form.control}
            name="descricao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descrição feita no formulário de novo negócio"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {/** Data da Previsão */}
          <FormField
            control={form.control}
            name="dataprevisao"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Data de Previsão</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-full pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
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
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          {/** Participantes */}
          <FormField
            control={form.control}
            name="participantes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Participantes</FormLabel>
                <FormControl>
                  <Input
                    placeholder="@"
                    className="resize-none"
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
                <FormLabel>Origem</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Digite como encontrou esse lead"
                    className="resize-none"
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
                <FormLabel>Produto</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
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
        </form>
      </Form>
    </div>
  );
}

export default FormDetalhe;
