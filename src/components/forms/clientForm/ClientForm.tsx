import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DivForm, DivInputs, Modal, DivTitle, InputG, Label, Title, ButtonX, InputP, InputPP, ButtonClient, DivSelect } from './styles';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiOutlineXCircle } from 'react-icons/hi';
// import { HiChevronDown } from 'react-icons/hi';

const schema = z.object({
  cpfcnpj: z.string().min(1),
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
  cidade: z.string(),
  uf: z.string(),
  bairro: z.string(),
  numero: z.string()
});

type FormValues = z.infer<typeof schema>;

export default function ClientForm()  {
  const {
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: any) => console.log(data);
  return (
    <Modal>
      {/* Título do formulário e ícones */}
      <DivTitle>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 15}}>
          <HiOutlineUserGroup size={27} style={{
            color: '#575757',
          }}/>
          <Title>Novo Cliente</Title>
        </div>
        <ButtonX>
          <HiOutlineXCircle size={30} style={{
            color: '#575757',
          }}/>
        </ButtonX>
      </DivTitle>
      
      {/* Começo do Formulário */}
      {/* Dados do Cliente */}
      <DivForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DivInputs>
            <Label>CPF/CNPJ</Label>
            <InputG placeholder='Digite o CPF/CNPJ' {...register('cpfcnpj')} />
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
              <DivSelect>
                {/* <input type="radio" name="option" />
                {/* <HiChevronDown /> */}
              </DivSelect>
            </DivInputs>
            
            <DivInputs>
              <Label>Status</Label>
              <DivSelect>

              </DivSelect>
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
              <Label>Telefone</Label>
              <InputG placeholder='Digite o número de telefone do contato' />
            </DivInputs>

            <DivInputs>
              <Label>Telefone 2</Label>
              <InputG placeholder='Digite o número de telefone do contato' />
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
              <InputG placeholder='Digite o CEP do cliente' {...register('cep')}/>
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
