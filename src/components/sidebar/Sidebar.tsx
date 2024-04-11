import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import ClientForm from '../forms/clientForm/ClientForm';
import { ProductForm } from '../forms/productForm/productForm';
import { Box, Users, ArrowUpRight} from 'lucide-react';
  
const Sidebar = () => {
  return (
    <div className='p-4'>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1"> 
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Users size={16}/>
              <h1>Clientes</h1>
            </div>
            <AccordionTrigger> </AccordionTrigger>
          </div>
          <AccordionContent className='flex flex-col items-start'>
            <ClientForm />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <div className='flex items-center justify-between'> 
            <div className='flex items-center gap-2'>
              <Box size={16}/>
              <h1>Produtos</h1>
            </div>  
            <AccordionTrigger> </AccordionTrigger>
          </div>  
          <AccordionContent className='flex flex-col items-start'>
            <div className='flex items-center gap-2'>
              <ArrowUpRight size={16}/>
             Visualizar Produtos {/** link para tela dos produtos */}
            </div>
            <ProductForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>    
  );
};

export default Sidebar;
