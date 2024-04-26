import React, { useState } from 'react';
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
import {  useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAuthContext } from '@/context/AuthContext';

const schema = z.object({
  email: z.string().email({ message: 'Email inválido'}),
  password: z.string()
}).required();

interface ILoginProps {
  children: React.ReactNode;
}

type handleLoginFormData = z.infer<typeof schema>;

const Login: React.FC<ILoginProps> = ({ children }) => {
  const [error, setError] = useState<string |null>(null);
  const { register, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    criteriaMode: 'all',
    mode: 'all'
  });

  //const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => console.log(data);

  const { isAuthenticated, login } = useAuthContext();

  const handleLogin = async (data: handleLoginFormData) => {
    const response = await login(data.email, data.password);
    if (response instanceof Error) {
      console.log(error);
      setError('Usuário ou senha incorretos.');
    }
  };

  if (isAuthenticated)
    return (
      <>{children}</>
    );

  return (
    <div className='flex min-h-screen bg-indigo-200 justify-center items-center'>
      <Card className="w-[450px] h-[400px]">
        <CardHeader>
          <CardTitle>Já tem cadastro?</CardTitle>
          <CardDescription>Faça o seu login</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)}>
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
                  {...register('password', { required: true })}
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
