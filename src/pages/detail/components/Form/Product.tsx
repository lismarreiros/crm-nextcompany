import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormLabel, FormItem } from '@/components/shadcn/ui/form';
import { Input } from '@/components/shadcn/ui/input';
import { ChangeEvent, useState } from 'react';
import CustomInputCurrencyMask from '@/utils/customInputCurrencyMask';
import { FancyMultiSelect } from '@/utils/customMultipleSelect';
import schema from '@/validations/negocios/schema';
import { MinusIcon, PlusIcon } from 'lucide-react';

const productsList = [
  {label: 'wCompany', value:'wCompany'},
  {label: 'iCompany', value: 'iCompany'},
  {label: 'xPDV', value: 'xPDV'}
] as const;

const currencyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { value } = e.target;
  e.target.value = CustomInputCurrencyMask.valor(value);
};

const Product = () => {
  const { control } = useFormContext();
  const [quantity, setQuantity] = useState(0);

  const changedQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =parseInt(e.target.value) || 0;
    setQuantity(newValue);
  };

  const incrementQuantity = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = form.getValues();
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='py-2 px-2 flex flex-col gap-4'>
        <div className='flex items-start gap-2'>  
          {/** Produtos */}
          <FormField
            control={control}
            name='produto'
            render={({ field }) => (
              <FormItem className='flex flex-col w-3/4'>
                <FormLabel className='text-slate-900 pb-2.5'>Produto</FormLabel>
                <FormControl>
                  <FancyMultiSelect 
                    selectedItems={field.value ? field.value.split(',').map((value: any) => ({ label: value, value })) : []} 
                    selectables={productsList.map(item => ({ label: item.label, value: item.value }))}
                    onChange={(selected) => field.onChange(selected.map(item => item.value).join(','))}  />
                </FormControl>
              </FormItem>
            )}
          />
          {/** Quantidade de Produto */}
          <FormField
            control={control}
            name='quantidadeprod'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/4'>
                <FormLabel className='text-slate-900 pb-2.5'>Quantidade</FormLabel>
                <FormControl>
                  <div
                    className='flex bg-slate-50 items-center border rounded-md h-10 hover:bg-slate-100 hover:text-slate-900 text-muted-foreground'>
                    <div className='w-full h-full flex items-center justify-around'>
                      <button
                        type='button'
                        className='flex items-center justify-center w-1/4 border-r-2 hover:bg-slate-200 h-full'
                        onClick={decrementQuantity}
                      >
                        <MinusIcon size={12} />
                      </button>
                      <Input
                        value={quantity}
                        className='bg-slate-50 border-0 w-2/4 h-full text-center text-sm focus:bg-slate-100 focus:outline-none focus:ring-0 hover:bg-slate-100 caret-invisible'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          changedQuantity(e);
                          field.onChange(e);
                        }}
                      />
                      <button
                        type='button'
                        onClick={incrementQuantity}
                        className='flex items-center justify-center w-1/4 border-l-2 hover:bg-slate-200 h-full'>
                        <PlusIcon size={12}/>
                      </button>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

        </div>
        <div className='flex items-center gap-2'>

          {/** Desconto */}
          <FormField
            control={control}
            name='descontoprod'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/3'>
                <FormLabel className='text-slate-900 pb-2.5'>Desconto</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Digite o valor"
                    className='bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      currencyInputChange(e);
                      field.onChange(e);
                    }} />
                </FormControl>
              </FormItem>
            )}
          />

          {/** Valor */}
          <FormField
            control={control}
            name='descontoprod'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/3'>
                <FormLabel className='text-slate-900 pb-2.5'>Valor</FormLabel>
                <FormControl>
                  <Input
                    disabled
                    className='bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      currencyInputChange(e);
                      field.onChange(e);
                    }} />
                </FormControl>
              </FormItem>
            )}
          />

          {/** Total */}
          <FormField
            control={control}
            name='descontoprod'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/3'>
                <FormLabel className='text-slate-900 pb-2.5'>Total</FormLabel>
                <FormControl>
                  <Input
                    disabled
                    className='bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      currencyInputChange(e);
                      field.onChange(e);
                    }} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* <Button type='submit' className='mt-2 w-4/6 self-center bg-indigo-700'>Salvar Alterações</Button> */}
      </form>
    </div>
  );
};

export default Product;
