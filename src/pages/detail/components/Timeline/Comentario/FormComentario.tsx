import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/shadcn/ui/textarea';
import { useForm } from 'react-hook-form';
import { Form, 
  FormControl, 
  FormField, 
  FormItem,
} from '@/components/shadcn/ui/form';
import { Button } from '@/components/shadcn/ui/button';

type FormComentarioProps = {
  onCommentSubmit: (comment: string) => void;
};

const schema = z.object({
  comentario: z.string().max(100, { message: 'Limite de caracteres atingido' }),
});

const FormComentario: React.FC<FormComentarioProps> = ({ onCommentSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const comentario = formData.get('comentario') as string;
    onCommentSubmit(comentario);
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div className='py-4'>
      <Form {...form}>
        <form onSubmit={handleSubmit} className='py-2 flex flex-col gap-2'>
          <FormField
            control={form.control}
            name="comentario"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Escreva um comentário"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' className='w-2/6 my-4 self-end'>Adicionar Comentário</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComentario;
