import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/ui/accordion';
import { ProductForm } from '../forms/productForm/productForm';
import { BoxIcon, UsersIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductsDetail from '../products/ProductsDetail';

interface ProductFormData {
  nome: string;
  descricao: string; 
  valor: string;
  codprod: string;
}
const Sidebar = () => {
  const [products, setProducts] = useState<ProductFormData[]>([]);

  const handleProductSubmit = (data: ProductFormData) => {
    setProducts([data, ...products]);
  };
  
  return (
    <div className='p-4 text-slate-800'>
      <div>
        <Link to='/clientes' className='flex items-center gap-2 font-medium hover:bg-indigo-50 rounded p-2' title='Ir para clientes'>
          <UsersIcon size={20}/>
          <p className='hidden lg:block'>Clientes</p>
        </Link>
      </div>
     
      {/** PRODUTOS */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <div 
            title='Mostrar produtos'
            className='flex items-center p-2 mt-2 h-[42px] rounded-md hover:bg-indigo-50'> 
            <AccordionTrigger className='gap-12' > 
              <div className='flex flex-start items-center gap-2'>
                <BoxIcon size={20} />
                <h1 className='hidden md:block'>Produtos</h1>
              </div>  
            </AccordionTrigger>
          </div>  
          <AccordionContent className='flex flex-col items-start'>
            <div className='flex items-center gap-2 px-2'>
              <ProductsDetail 
                data={products} />
            </div>
            <ProductForm onProductSubmit={handleProductSubmit} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>    
  );
};

export default Sidebar;
