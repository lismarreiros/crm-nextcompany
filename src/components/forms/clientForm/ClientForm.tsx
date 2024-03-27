/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DivForm, DivInputs, Modal, DivTitle, InputG, Label, 
  Title, InputP, InputPP,  } from './styles';
import Select from './Select';
import InputMask from 'react-input-mask';
import ValidationCpforCnpj from '@/validations/cpfCnpj/validationCpfCnpj';
import CustomInputMask from '@/utils/customInputMask';

import { Users, CircleX } from 'lucide-react';
// import { Button } from '@/components/shadcn/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shadcn/ui/tooltip';

import { Button } from '@/components/shadcn/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import { Input } from '@/components/shadcn/ui/input';
// import { Label } from '@/components/shadcn/ui/label';

{/* validação */}
const schema = z.object({
  cpfOrCnpj: z.string()
    .refine((value: string) => {
      if (typeof value !== 'string') return false;
      return ValidationCpforCnpj.validateCpfOrCnpj(value);
    }, 'Digite um CPF ou CNPJ válido.'),
  nomefantasia: z.string()
    .max(100)
    .transform(nomefantasia => {
      return nomefantasia.trim().split('').map(word => {
        return word[0].toLocaleUpperCase().concat(word.substring(1));
      }).join(' ');
    }),
  razao: z.string(),
  ramo: z.string(),
  status: z.string().min(1),
  cep: z.string(),
  rua: z.string(),
  cidade: z.string(),
  uf: z.string(),
  bairro: z.string(),
  numero: z.string()
});

type FormValues = z.infer<typeof schema>;

const ClientFormComponent = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          
          {/* <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default function ClientForm()  {
  const cpfCNPJInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    e.target.value = CustomInputMask.cpfCnpj(value);
  };

  const {
    register, 
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => console.log(data);
  const cpfCnpjRegister = register('cpfOrCnpj');

  const pesquisarCep = async (cep: any) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        throw new Error('CEP não encontrado.');
      }

      setValue('rua', data.logradouro);
      setValue('bairro', data.bairro);
      setValue('cidade', data.localidade);
      setValue('uf', data.uf);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP. Por favor, tente novamente');
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, ''); // Remove caracteres não númericos

    if (cep.length === 8) {
      pesquisarCep(cep);
    }
  };

  return (
    <Modal>
      <ClientFormComponent />

      {/* Começo do Formulário */}
      {/* Dados do Cliente */}
      <DivForm>
        {/* <Form>
          <FormField 
            control=''}
            name='cpfcnpj'
            render={({field}) => (
              <FormItem>
                <FormLabel>CPF/CNPJ</FormLabel>
                <FormControl>
                  <Input placeholder='cpf/cnpj' {...field} />
                </FormControl>
              </FormItem>
            )}
          >

          </FormField>
        </Form> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <DivInputs>
            <Label>CPF/CNPJ</Label>
            <InputG
              placeholder='Digite o CPF/CNPJ'
              {...cpfCnpjRegister}
              onChange={(e) => {
                cpfCNPJInputChange(e);
                cpfCnpjRegister.onChange(e);
              }}
            />
            {errors?.cpfOrCnpj && <p>{errors.cpfOrCnpj.message}</p>}
          </DivInputs>

          <DivInputs>
            <Label>Nome/Fantasia</Label>
            <InputG placeholder='Digite Nome/Fantasia' {...register('nomefantasia')}/>
          </DivInputs>

          <DivInputs>
            <Label>Razão Social</Label>
            <InputG placeholder='Digite a razão social' {...register('razao')} />
          </DivInputs>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <DivInputs>
              <Label>Ramo Atividade</Label>
              <Select/>
            </DivInputs>
    
          </div>

          {/* Informações de Contato */} 
          <div>
            <DivTitle><Title>Contato</Title></DivTitle>
            <DivInputs>
              <Label>Nome do Contato</Label>
              <InputG placeholder='Digite o nome do contato' />
            </DivInputs>

            <DivInputs>
              <Label>Telefone Celular</Label>
              <InputG as={InputMask} mask="(99) 99999-9999" placeholder='Digite o número de telefone do contato' />
            </DivInputs>

            <DivInputs>
              <Label>Telefone Fixo</Label>
              <InputG as={InputMask} mask="(99) 9999-9999"  placeholder='Digite o número de telefone do contato' />
            </DivInputs>

            <DivInputs>
              <Label>Email do contato</Label>
              <InputG placeholder='contato@email.com' />
            </DivInputs>

            <DivInputs>
              <Label>Função</Label>
              <InputG placeholder='' />
            </DivInputs>
          </div>

          {/* Informações do Endereço do Cliente */}
          <div>
            <DivTitle><Title>Endereço</Title></DivTitle>
            <DivInputs>
              <Label>CEP</Label>
              <InputPP as={InputMask} mask="99999-999" placeholder='Digite o CEP' {...register('cep')} onBlur={handleCepChange}/>
            </DivInputs>

            <DivInputs>
              <Label>Rua</Label>
              <InputG placeholder='Digite o endereço' {...register('rua')} />
            </DivInputs>
              
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <DivInputs>
                <Label>Cidade</Label>
                <InputP placeholder='Digite a cidade' {...register('cidade')} />
              
              </DivInputs>

              <DivInputs>
                <Label>UF</Label>
                <InputPP placeholder='Selecione UF' {...register('uf')} />
              </DivInputs>
            </div>
      
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <DivInputs>
                <Label>Bairro</Label>
                <InputP  {...register('bairro')} />
              </DivInputs>

              <DivInputs>
                <Label>Número</Label>
                <InputPP {...register('numero')} />
              </DivInputs>
            </div>
          </div>
          <Button type='submit'>Cadastrar Cliente</Button>
        </form>
      </DivForm>
    </Modal>
  );
}
