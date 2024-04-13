import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/shadcn/ui/form';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/shadcn/ui/select';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shadcn/ui/popover';
import { Button } from '@/components/shadcn/ui/button';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/shadcn/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Input } from '@/components/shadcn/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/ui/radio-group';
import { Switch } from '@/components/shadcn/ui/switch';

type FormTarefaProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTaskSubmit: (formData: any) => void;
};

const schema = z.object({
  id: z.string(),
  tipo: z.string().optional(),
  descricao: z.string().max(100),
  responsavel: z.string().optional(),
  participantes: z.string().optional(),
  dtinicio: z.date().optional(),
  dtconclusao: z.date().optional(),
  prioridade: z.string().optional(),
  notificacao: z.boolean().optional()
});
  
const FormTarefa: React.FC<FormTarefaProps> = ({ onTaskSubmit }) => {

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = form.getValues();
    onTaskSubmit(formData);
    console.log(formData);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit} className='py-2 flex flex-col gap-2'>
          {/** Descrição */}
          <FormField
            control={form.control}
            name="descricao"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Descrição da tarefa"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/** Resonsavel */}
          <FormField
            control={form.control}
            name="responsavel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Responsável</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/** Data de Ínicio */}
          <div className='w-full flex mt-1 gap-8 justify-items-stretch'>
            <FormField
              control={form.control}
              name="dtinicio"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data de Ínicio</FormLabel>
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
                            format(field.value, 'PPP',  {locale: ptBR})
                          ) : (
                            <span>Escolha um data</span>
                          )}
                          <CalendarIcon className="ml-1 h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/** Data de Conclusão*/}
            <FormField
              control={form.control}
              name="dtconclusao"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Data de Conclusão</FormLabel>
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
                            format(field.value, 'PPP', {locale: ptBR})
                          ) : (
                            <span>Escolha uma data</span>
                          )}
                          <CalendarIcon className="ml-1 h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        locale={ptBR}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          {/** Tipo da Tarefa */}
          <FormField
            control={form.control}
            name='tipo'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um tipo" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Reunião">Reunião</SelectItem>
                    <SelectItem value="Conferência">Conferência Online</SelectItem>
                    <SelectItem value="Outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
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
                    placeholder=""
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/** Prioridade */}
          <FormField
            control={form.control}
            name="prioridade"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Prioridade</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-row items-center gap-4"
                  >
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Baixa" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Baixa
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Normal" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Normal
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Alta" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Alta
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/** Notificação */}
          <FormField
            control={form.control}
            name="notificacao"
            render={({ field }) => (
              <FormItem className="flex flex-col justify-between mt-2">
                <FormLabel className="text-sm">
                     Ativar notificações
                </FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' className='w-2/6 my-4 self-end'>Criar Tarefa</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormTarefa;
