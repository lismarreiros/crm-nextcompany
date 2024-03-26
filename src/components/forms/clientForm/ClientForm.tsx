/* eslint-disable no-extra-boolean-cast */
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DivForm, DivInputs, Modal, DivTitle, InputG, Label, 
  Title, ButtonX, InputP, InputPP, ButtonClient, TooltipText } from './styles';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiOutlineXCircle } from 'react-icons/hi';
import Select from './Select';
import InputMask from 'react-input-mask';
import ValidationCpforCnpj from '../../../validations/cpfCnpj/validationCpfCnpj';
import CustomInputMask from '../../../utils/customInputMask';

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
      {/* Título do formulário e ícones */}
      <DivTitle>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 15}}>
          <HiOutlineUserGroup size={28} style={{
            color: '#575757',
            strokeWidth: 1.5
          }}/>
          <Title>Novo Cliente</Title>
        </div>
        <ButtonX>
          <HiOutlineXCircle size={34} style={
            { strokeWidth: 1.5 }
          }/>
          <TooltipText>Sair</TooltipText>
        </ButtonX>
      </DivTitle>
      
      {/* Começo do Formulário */}
      {/* Dados do Cliente */}
      <DivForm>
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
          <ButtonClient type='submit'>Cadastrar Cliente</ButtonClient>
        </form>
      </DivForm>
    </Modal>
  );
}
