/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
//import ValidationCpforCnpj from '@/validations/cpfCnpj/validationCpfCnpj';
import CustomInputMask from '@/utils/customInputMask';
import { PlusIcon, UsersIcon } from 'lucide-react';
import { Button } from '@/components/shadcn/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from '@/components/shadcn/ui/dialog';
import { Input, InputMasks } from '@/components/shadcn/ui/input';
import { Form, FormControl, FormField, FormLabel, FormItem, FormMessage } from '@/components/shadcn/ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from '@/components/shadcn/ui/select';
import Constants from '@/constants';
import { useActivityBranchContext } from '@/pages/configurations/activities/branch/ActivityBranchContext';
import { ClientService } from '@/services/ClientService';
import cliente from '@/validations/schemas/client';
import { z } from 'zod';

type ClientFormProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClientSubmit: (data: any) => void;
};

type BranchType = {
  idramoatividade: string;
  descricao: string;
}[]

const ClientForm: React.FC<ClientFormProps> = ({ onClientSubmit }) => {
  const { activityBranches } = useActivityBranchContext();
  const [branches, setBranches] = useState<BranchType>([]);
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof cliente>>({
    resolver: zodResolver(cliente),
  });

  const cpfCNPJInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    e.target.value = CustomInputMask.cpfCnpj(value);
  };

  // const handleSubmit =  (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = form.getValues();
  //   // console.log(data);
  //   onClientSubmit(data);
  //   setOpen(false);
  // };

  function createCliente(data: z.infer<typeof cliente>) {
    ClientService.create(data)
      .then(response => {
        console.log('Data being submitted:', data);
        onClientSubmit(data);
        setOpen(false);
        console.log('Cliente Cadastrado', response);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }
  
  const pesquisarCep = async (cep: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        throw new Error('CEP não encontrado.');
      }
      form.setValue('address.address', data.logradouro);
      form.setValue('address.neighborhood', data.bairro);
      form.setValue('address.city', data.localidade);
      form.setValue('address.federativeUnit', data.uf);
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP. Por favor, tente novamente');
    }
  };

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const zipCode = e.target.value.replace(/\D/g, ''); // Remove caracteres não númericos

    if (zipCode.length === 8) {
      pesquisarCep(zipCode);
    }
  };

  useEffect(() => {
    const newBranches = activityBranches.map((branch, index) => ({
      idramoatividade: `${index + 1}`,
      descricao: branch.descricao,
    }));
    setBranches(newBranches);
  }, [activityBranches]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant='ghost' className='gap-1 mt-2 bg-indigo-50 hover:bg-indigo-200'> 
          <PlusIcon size={12}/> 
         Adicionar Cliente
        </Button>
      </DialogTrigger> 
      <DialogContent className='max-w-[54vw]'> 
        <DialogHeader>
          <DialogTitle>
            <div className='flex items-center gap-2 font-medium text-md'>
              <UsersIcon size={22} />
                Novo Cliente
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Começo do Formulário */}
        <Form {...form}>
          <form onSubmit={(e) => {
            e.preventDefault(); 
            console.log('Form submitted');
            form.handleSubmit(createCliente)(e); 
          }} className="space-y-8">
            <div className='grid gap-4 pt-2'>

              {/* CPF/CNPJ */}
              <FormField
                control={form.control}
                name='cpfCnpj'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CPF/CNPJ</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Digite CPF/CNPJ"
                        onChange={(e) => {
                          cpfCNPJInputChange(e);
                          field.onChange(e);
                        }}  />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Nome/Fantasia */}
              <FormField
                control={form.control}
                name='fantasyName'
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
                name='corporateName'
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
                name='activityBranchId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ramo Atividade</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o ramo de atividade"/>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {branches.map((ramo, idramoatividade) => (
                              <SelectItem key={idramoatividade} value={ramo.descricao}>
                                <SelectLabel className='p-2 font-normal'>{ramo.descricao}</SelectLabel>
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
              {/** Status */}
              <FormField
                control={form.control}
                name='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue='Ativo'>
                        <SelectTrigger>
                          <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            {Constants.LISTA_STATUS.map((status) => (
                              <SelectItem key={status} value={status}>
                                <SelectLabel className='p-2 font-normal'>{status}</SelectLabel>
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
                  name='contacts.name'
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
                  name='contacts.phone'
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

                {/* Telefone 2 */}
                <FormField
                  control={form.control}
                  name='contacts.cellPhone'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefone 2</FormLabel>
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

                {/* Email */}
                <FormField
                  control={form.control}
                  name='contacts.email'
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
                  name='contacts.jobtitle'
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
                  name='address.zipCode'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CEP</FormLabel>
                      <FormControl>
                        <InputMasks
                          mask="99999-999"
                          placeholder="Digite CEP" {...field} onBlur={handleCepChange}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* BAIRRO */}
                <FormField
                  control={form.control}
                  name='address.neighborhood'
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
                  name='address.address'
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
                  name='address.city'
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
                  name='address.federativeUnit'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>UF</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          defaultValue={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue
                              placeholder="Selecione unidade federativa"
                              {...field}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {Constants.LISTA_DE_ESTADOS.map((estado) => (
                                <SelectItem key={estado.sigla} value={estado.sigla}>
                                  <SelectLabel className='p-2 font-normal'>{`${estado.sigla} - ${estado.nome}`}</SelectLabel>
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
                  name='address.number'
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
              <Button type="submit" className='bg-indigo-700'>Salvar Cliente</Button>
            </DialogFooter>
          </form>
        </Form> 
      </DialogContent> 
    </Dialog>
  
  );
};

export default ClientForm;
