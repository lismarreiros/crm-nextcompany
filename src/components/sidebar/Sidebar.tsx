import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import { ProductForm } from '../forms/productForm/productForm';
import { BoxIcon, UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductsTable from '../products/ProductsTable';
  
const Sidebar = () => {
  return (
    <div className='p-4'>
      <div>
        <Link to='/clientes' className='flex items-center gap-2 font-medium hover:bg-slate-100 rounded p-2' title='Ir para clientes'>
          <UsersIcon size={20}/>
          <p className='hidden lg:block'>Clientes</p>
        </Link>
      </div>
     
      {/** PRODUTOS */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <div className='flex items-center justify-between p-2'> 
            <AccordionTrigger className='gap-2'> 
              <div className='flex flex-start items-center gap-2'>
                <BoxIcon size={20}/>
                <h1 className='hidden md:block'>Produtos</h1>
              </div>  
            </AccordionTrigger>
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
