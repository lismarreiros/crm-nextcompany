import { z } from 'zod';

const fluxodeoportunidade = z.object({
  idfluxodeoportunidade: z.string(),
  descricao: z.string(),
});

export default fluxodeoportunidade;
