import React from 'react';
import { Button } from '@/components/shadcn/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/ui/card';
import { Input } from '@/components/shadcn/ui/input';
import { Label } from '@/components/shadcn/ui/label';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email({ message: 'Email inválido'}),
  senha: z.string()
}).required();

const Login = () => {
  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => console.log(data);

  return (
    <div className='flex min-h-screen bg-indigo-200 justify-center items-center'>
      <Card className="w-[450px] h-[400px]">
        <CardHeader>
          <CardTitle>Já tem cadastro?</CardTitle>
          <CardDescription>Faça o seu login</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Usuário</Label>
                <Input
                  {...register('email', { required: true })} 
                  type='email' 
                  placeholder="Endereço de email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="senha">Senha</Label>
                <Input 
                  {...register('senha', { required: true })}
                  type='password' 
                  placeholder="Senha" />
              </div>
              <CardFooter className="mt-6 flex justify-between">
                <Button type='button' variant="ghost">Criar Conta</Button>
                <Button type='submit' className='bg-indigo-500 hover:bg-indigo-800 w-[130px]'>Entrar</Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
