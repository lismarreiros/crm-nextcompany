import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DivForm, DivInputs, Modal, DivTitle, InputG, Label, 
  Title, ButtonX, InputP, InputPP, ButtonClient, TooltipText } from './styles';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiOutlineXCircle } from 'react-icons/hi';
import Select from './Select';
import InputMask from 'react-input-mask';

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
  const [cpfCnpjMaks, setCpfCnpjMask] = useState('');

  const cpfCNPJInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.replace(/[^0-9]/g, '').length < 12) {
      setCpfCnpjMask('999.999.999-99'); //Máscara para CPF
    } else {
      setCpfCnpjMask('99.999.999/9999-99'); //Máscara para CNPJ
    }
  };

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
              as={InputMask}
              mask={cpfCnpjMaks}
              maskChar={null}
              placeholder='Digite o CPF/CNPJ' {...register('cpfcnpj')}
              onChange={cpfCNPJInputChange}
            />
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
              <InputG as={InputMask} mask="99999-999" placeholder='Digite o CEP do cliente' {...register('cep')}/>
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
