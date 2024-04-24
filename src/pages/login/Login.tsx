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

const Login = () => {
  return (
    <div className='flex min-h-screen bg-indigo-200 justify-center items-center'>
      <Card className="w-[450px] h-[400px]">
        <CardHeader>
          <CardTitle>Já tem cadastro?</CardTitle>
          <CardDescription>Faça o seu login</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Usuário</Label>
                <Input type='email' id="nome" placeholder="Endereço de email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="senha">Senha</Label>
                <Input type='password' id="senha" placeholder="Senha" />
              </div>
              <CardFooter className="mt-6 flex justify-between">
                <Button variant="ghost">Criar Conta</Button>
                <Button className='bg-indigo-500 hover:bg-indigo-800 w-[130px]'>Entrar</Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
