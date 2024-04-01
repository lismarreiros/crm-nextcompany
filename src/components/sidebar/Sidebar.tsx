import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import ClientForm from '../forms/clientForm/ClientForm';
  
const Sidebar = () => {
  return (
    <div className='p-4'>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> Clientes </AccordionTrigger>
          <AccordionContent>
            Clientes {/** link para tela dos clientes */}
            <ClientForm/>
          </AccordionContent>
     
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger> Produtos </AccordionTrigger>
          <AccordionContent>
             Produtos {/** link para tela dos produtos */}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>    
  );
};

export default Sidebar;
