import { z } from 'zod';

const negocio = z.object({
  client: z.string(),
  produto: z.string(),
  tel: z.string(),
  descricao: z.string(),
  dtfechamento: z.date(),
  dtinicio: z.date(),
  dtcadastro: z.date(),
  previsao: z.date(),
  participantes: z.string(),
  idfontenegocio: z.string(),
  situacao: z.string(),
  motivo: z.string(),
  total: z.string()
});

export default negocio;
