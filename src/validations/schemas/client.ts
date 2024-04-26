import { z } from 'zod';
  
const ContactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  cellPhone: z.string(),
  jobtitle: z.string()
});
    
const AddressSchema = z.object({
  id: z.number(),
  zipCode: z.string(),
  address: z.string(),
  city: z.string(),
  complement: z.string(),
  number: z.string(),
  ibgeCode: z.string(),
  federativeUnit: z.string(),
  neighborhood: z.string(),
});
    
const cliente = z.object({
  id: z.number(),
  status: z.string(),
  cpfCnpj: z.string(),
  corporateName: z.string(),
  fantasyName: z.string(),
  activityBranchId: z.number(),
  companyId: z.number(),
  contacts: ContactSchema,
  address: AddressSchema,
});

export default cliente;
