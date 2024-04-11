import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import { ProductForm } from '../forms/productForm/productForm';
import { Box, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductsTable from '../products/ProductsTable';
  
const Sidebar = () => {
  return (
    <div className='p-4'>
      <div>
        <Link to='/clientes' className='flex items-center gap-2 hover:bg-slate-100 rounded p-2' title='Ir para clientes'>
          <Users size={16}/>
          Clientes
        </Link>
      </div>
     
      {/** PRODUTOS */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <div className='flex items-center justify-between p-2'> 
            <div className='flex items-center gap-2'>
              <Box size={16}/>
              <h1>Produtos</h1>
            </div>  
            <AccordionTrigger> </AccordionTrigger>
          </div>  
          <AccordionContent className='flex flex-col items-start'>
            <div className='flex items-center gap-2 px-2 mb-2'>
              <ProductsTable/>
            </div>
            <ProductForm />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>    
  );
};

export default Sidebar;
