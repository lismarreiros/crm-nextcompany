import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
  
const Sidebar = () => {
  return (
    <div className='p-4'>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> Clientes </AccordionTrigger>
          <AccordionContent>
            Santa Lúcia
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger> Produtos </AccordionTrigger>
          <AccordionContent>
             iCompany
          </AccordionContent>
          <AccordionContent>
             wCompany
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>    
  );
};

export default Sidebar;
