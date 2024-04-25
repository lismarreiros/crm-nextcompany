import Product from './Product';
import Details from './Details';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/shadcn/ui/tabs';
import Situation from './Situation';
import { FormProvider, useForm } from 'react-hook-form';
import negocio from '@/validations/schemas/negocio';
import { zodResolver } from '@hookform/resolvers/zod';
import { Bussiness } from '@/entities/bussiness';

type PropsType = {
  bussiness: Bussiness,
}

function FormDetalhe({ bussiness }: PropsType) {
  const methods = useForm({ resolver: zodResolver(negocio) });
  
  return (
    <div className='bg-inherit h-full border-l border-slate-200'>
      <FormProvider {...methods}>
        <div className='flex flex-col gap-4'>
          <Tabs defaultValue='details' className='w-full bg-inherit'>
            <TabsList className='grid w-full grid-cols-3 border-b rounded-0'>
              <TabsTrigger value='details'>Detalhes</TabsTrigger>
              <TabsTrigger value='products'>Produto</TabsTrigger>
              <TabsTrigger value='situation'>Situação</TabsTrigger>
            </TabsList>
            <TabsContent value='details' className='w-full py-2 px-4'>
              <Details bussiness={bussiness} />
            </TabsContent>
            <TabsContent value='products' className='w-full py-2 px-4'>
              <Product/>
            </TabsContent>
            <TabsContent value='situation' className='w-full py-2 px-4'>
              <Situation/>
            </TabsContent>
          </Tabs>
        </div>
      </FormProvider>
    </div>
  );
}

export default FormDetalhe;
