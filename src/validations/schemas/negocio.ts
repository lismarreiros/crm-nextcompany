import { z } from 'zod';

const negocio = z.object({
  idnegocio: z.string(),
  client: z.string(),
  descricao: z.string(),
  idfluxodeoportunidade: z.string(),
  idfontenegocio: z.string(),
  idtiponegocio: z.string(),
  dtcadastro: z.date(),
  dtinicio: z.date(),
  dtfechamento: z.date(),
  previsao: z.date(),
  total: z.string(),
  situacao: z.string(),
  motivo: z.string(),
  observacao: z.string(),
  feedback: z.string(),
  idindicador: z.string(),
  
  tel: z.string(),
  participantes: z.string(),
  produto: z.string(),
});

export default negocio;
