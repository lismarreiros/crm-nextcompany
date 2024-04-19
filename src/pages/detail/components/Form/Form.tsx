import Product from './Product';
import Details from './Details';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/shadcn/ui/tabs';
import Situation from './Situation';
import { FormProvider, useForm } from 'react-hook-form';
import negocio from '@/validations/schemas/negocio';
import { zodResolver } from '@hookform/resolvers/zod';

function FormDetalhe() {
  const methods = useForm({ resolver: zodResolver(negocio) });
  return (
    <div className='bg-inherit'>
      <FormProvider {...methods}>
        <div className='flex flex-col gap-4'>
          <Tabs defaultValue='details' className='w-full bg-inherit'>
            <TabsList className='grid w-full grid-cols-3 border-b rounded-0'>
              <TabsTrigger value='details' className='py-4 px-4 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-300 data-[state=active]:text-indigo-500 text-slate-700'>Detalhes</TabsTrigger>
              <TabsTrigger value='products' className='py-4 px-4 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-300 data-[state=active]:text-indigo-500 text-slate-700'>Produto</TabsTrigger>
              <TabsTrigger value='situation' className='py-4 px-4 data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-indigo-300 data-[state=active]:text-indigo-500 text-slate-700'>Situação</TabsTrigger>
            </TabsList>
            <TabsContent value='details' className='w-full py-2 px-4'>
              <Details/>
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
