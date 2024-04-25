import { z } from 'zod';

const produtonegocio = z.object({
  codprod: z.string(),
  idnegocio: z.string(),
  quantidade: z.string(),
  valor: z.string(),
  desconto: z.string(),
  totalprod: z.string(),
  comissao: z.string()
});

export default produtonegocio;
