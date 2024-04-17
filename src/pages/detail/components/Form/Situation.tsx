import { Button } from '@/components/shadcn/ui/button';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/shadcn/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/ui/select';
import schema from '@/validations/negocios/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';

const Situation = () => {
  const { control } = useFormContext();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
      
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = form.getValues();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/** Situação */}
        <FormField
          control={control}
          name='situacao'
          render={({ field }) => (
            <FormItem className='w-[15vw]'>
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
            </FormItem>
          )}
        /> 
        <Button type='submit' className='mt-2 w-4/6 self-center bg-indigo-700'>Salvar Alterações</Button>
      </form>
    </div>
  );
};

export default Situation;
