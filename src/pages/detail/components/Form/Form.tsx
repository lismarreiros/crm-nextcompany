import Product from './Product';
import Details from './Details';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/shadcn/ui/tabs';
import Situation from './Situation';
import { FormProvider, useForm } from 'react-hook-form';
import schema from '@/validations/negocios/schema';
import { zodResolver } from '@hookform/resolvers/zod';

function FormDetalhe() {
  const methods = useForm({ resolver: zodResolver(schema) });
  return (
    <div className='bg-inherit p-4'>
      <FormProvider {...methods}>
        <div className='py-2 px-2 flex flex-col gap-4'>
          <Tabs defaultValue='details' className='w-full bg-inherit'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='details'>Detalhes</TabsTrigger>
              <TabsTrigger value='products'>Produto</TabsTrigger>
              <TabsTrigger value='situation'>Situação</TabsTrigger>
            </TabsList>
            <TabsContent value='details' className='w-full'>
              <Details/>
            </TabsContent>
            <TabsContent value='products'>
              <Product/>
            </TabsContent>
            <TabsContent value='situation'>
              <Situation/>
            </TabsContent>
          </Tabs>
        </div>
      </FormProvider>
    </div>
  );
}

export default FormDetalhe;
