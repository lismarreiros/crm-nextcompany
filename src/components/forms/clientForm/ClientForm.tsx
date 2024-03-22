import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { DivForm, DivInputs, Modal, DivTitle, InputG, Label, Title, ButtonX } from './styles';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { HiOutlineXCircle } from 'react-icons/hi';

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
      <DivTitle>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <HiOutlineUserGroup size={25} style={{
            color: '#575757',
          }}/>
          <Title>Cliente</Title>
        </div>
        <ButtonX>
          <HiOutlineXCircle size={25} style={{
            color: '#575757',
          }}/>
        </ButtonX>
      </DivTitle>
      
      <DivForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DivInputs>
            <Label>CPF/CNPJ</Label>
            <InputG placeholder='Digite o CPF/CNPJ'{...register('cpfcnpj')} />
          </DivInputs>
          
          <DivInputs>
            <Label>Nome/Fantasia</Label>
            <InputG {...register('nomefantasia')}/>
          </DivInputs>

          <DivInputs>
            <Label>Razão Social</Label>
            <InputG {...register('razao')} />
          </DivInputs>
    
          <label>Ramo Atividade</label>
          <input {...register('ramo')} />
          <p>{errors.ramo?.message}</p>

          <label>Status</label>
          <input {...register('razao')} />
          <p>{errors.status?.message}</p>

          <div>
            <h2>Endereço</h2>
            <label>CEP</label>
            <input {...register('cep')}/>
            <p>{errors.cep?.message}</p>

            <label>Cidade</label>
            <input {...register('cidade')} />
            <p>{errors.cidade?.message}</p>

            <label>UF</label>
            <input {...register('uf')} />
            <p>{errors.uf?.message}</p>

            <label>Bairro</label>
            <input {...register('bairro')} />
            <p>{errors.bairro?.message}</p>

            <label>Número</label>
            <input {...register('numero')} />
            
          </div>

        </form>
      </DivForm>
    </Modal>
  );
}
