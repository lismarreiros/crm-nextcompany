/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DivForm, DivInputs, Modal, DivTitle, InputG, Label, 
  Title, InputP, InputPP,  } from './styles';
// import Select from './Select';
import InputMask from 'react-input-mask';
import ValidationCpforCnpj from '@/validations/cpfCnpj/validationCpfCnpj';
import CustomInputMask from '@/utils/customInputMask';

import { Users } from 'lucide-react';
import { Button } from '@/components/shadcn/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/shadcn/ui/dialog';
import { Input, InputPhoneNumber } from '@/components/shadcn/ui/input';
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '@/components/shadcn/ui/form';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn/ui/select';

import Constants from '@/constants';

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
  nomeContato: z.string(),
  celular: z.string(), 
  fixo: z.string(), 
  email: z.string(), 
  funcao: z.string(), 
  cep: z.string(),
  rua: z.string(),
  cidade: z.string(),
  uf: z.string(),
  bairro: z.string(),
  numero: z.string()
});

type FormValues = z.infer<typeof schema>;

const ClientFormComponent = () => {
  // const formSchema = z.object({
  //   cpfcnpj: z.string().min(2, {
  //     message: 'Username must be at least 2 characters.',
  //   }),
  // });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   console.log(values);
  //
  const cpfCNPJInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    e.target.value = CustomInputMask.cpfCnpj(value);
  };

  // const {
  //   register, 
  //   handleSubmit,
  //   setValue,
  //   formState: { errors }
  // } = useForm<FormValues>({
  //   resolver: zodResolver(schema)
  // });

  const onSubmit = (data: any) => console.log(data);
  // const cpfCnpjRegister = register('cpfOrCnpj');

  return (
    
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Edit Profile</Button>
      </DialogTrigger> 
      <DialogContent className='w-4/5'> 
        <DialogHeader>
          <DialogTitle>
            <div className='flex items-center gap-2'>
              <Users size={22} />
                  Novo Cliente
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Começo do Formulário */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className='grid gap-4 pt-2'>

              {/* CPF/CNPJ */}
              <FormField
                control={form.control}
                name='cpfOrCnpj'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF/CNPJ</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite CPF/CNPJ" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Nome/Fantasia */}
              <FormField
                control={form.control}
                name='nomefantasia'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome/Fantasia</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite Nome/Fantasia" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Razão Social */}
              <FormField
                control={form.control}
                name='razao'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Razão Social</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite a razão social" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Ramo Atividade */}
              <FormField
                control={form.control}
                name='ramo'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ramo Atividade</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o ramo de atividade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Constants.LISTA_DE_RAMO_DE_ATIVIDADE.map((ramo) => (
                              <SelectItem key={ramo} value={ramo}>
                                <SelectLabel>{ramo}</SelectLabel>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                
              {/* Contato do Cliente */}
              <h2 className='font-semibold pt-2'>Contato</h2>
              <hr />
              <div className='grid grid-cols-2 gap-4'>
                {/* Nome do Contato */}
                <FormField
                  control={form.control}
                  name='nomeContato'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o nome do contato" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Telefone 1 */}
                <FormField
                  control={form.control}
                  name='fixo'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Digite o número de telefone do contato"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Telefone 2 */}
                <FormField
                  control={form.control}
                  name='celular'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Celular</FormLabel>
                      <FormControl>
                        <InputPhoneNumber
                          {...field}
                          mask="(99) 99999-9999"
                          placeholder="Digite o número de telefone do contato"
                        />
                        {/* <Input placeholder="Digite o número de telefone do contato" {...field} /> */}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o email do contato" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Função */}
                <FormField
                  control={form.control}
                  name='funcao'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Função</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite a função" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Endereço do Cliente */}
              <h2 className='font-semibold pt-2'>Endereço</h2>
              <hr />  
              <div className='grid grid-cols-2 gap-3'>
                {/* CEP */}
                <FormField
                  control={form.control}
                  name='cep'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite CPF/CNPJ" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* BAIRRO */}
                <FormField
                  control={form.control}
                  name='bairro'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bairro</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o bairro" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* RUA */}
                <FormField
                  control={form.control}
                  name='rua'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Rua</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite o endereço" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* CIDADE */}
                <FormField
                  control={form.control}
                  name='cidade'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cidade</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite a cidade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* UF */}
                <FormField
                  control={form.control}
                  name='uf'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>UF</FormLabel>
                      <FormControl>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione unidade federativa" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {Constants.LISTA_DE_ESTADOS.map((estado) => (
                                <SelectItem key={estado.sigla} value={estado.sigla}>
                                  <SelectLabel>{`${estado.sigla} - ${estado.nome}`}</SelectLabel>
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* NÚMERO */}
                <FormField
                  control={form.control}
                  name='numero'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite número" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Salvar Cliente</Button>
            </DialogFooter>
          </form>
        </Form> 
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
