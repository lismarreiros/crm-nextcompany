import { ProductForm } from '@/components/forms/productForm/productForm';
import ProductsDetail from '@/components/products/ProductsDetail';
import { CommandInput, Command } from '@/components/shadcn/ui/command';
import React, { useState } from 'react';

interface ProductFormData {
    nome: string;
    descricao: string; 
    valor: string;
    codprod: string;
    comissao: string;
  }
  
const ProductPage = () => {
  const [products, setProducts] = useState<ProductFormData[]>([
    {
      nome: 'wCompany',
      descricao: 'Aplicativo de gerenciamento empresarial',
      valor: 'R$ 1599,99',
      codprod: '1',
      comissao: '15'
    }
  ]);

  const handleProductSubmit = (data: ProductFormData) => {
    setProducts([data, ...products]);
  };

  const handleProductDelete = (index: number) => {
    const listProducts = [...products];
    listProducts.splice(index, 1);
    setProducts(listProducts);
  };

  return (
    <div className='min-h-screen bg-indigo-200 p-8'>
      <div className='min-h-100 flex flex-col overflow bg-white rounded-md py-4 mx-8 mb-4 '>   
        <div className='flex m-2 justify-between items-center pr-2'>
          <h1 className='m-4 text-md font-medium'>Produtos</h1>
          <div className='flex gap-6'>
            <ProductForm  onProductSubmit={handleProductSubmit} />
            <Command className='flex items-center rounded-lg border-2 p-1 gap-1'>
              <CommandInput placeholder="Pesquisar..."/>
            </Command>
          </div>
        </div>
        <div>
          <ProductsDetail
            data={products}
            onProductDelete={handleProductDelete}  
          />
        </div>
      </div>
    </div>

  );
};

export default ProductPage;
