import { z } from 'zod';

const fluxodeoportunidade = z.object({
  idfluxodeoportunidade: z.string(),
  descricao: z.string(),
  ordem: z.string(),
});

export default fluxodeoportunidade;
