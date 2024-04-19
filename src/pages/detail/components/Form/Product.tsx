import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useState, useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormLabel, FormItem } from '@/components/shadcn/ui/form';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader } from '@/components/shadcn/ui/table';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/shadcn/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shadcn/ui/popover';
import { Button } from '@/components/shadcn/ui/button';
import { Input } from '@/components/shadcn/ui/input';

import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown, Equal, Minus, PlusIcon, Trash2Icon, X } from 'lucide-react';
// import CustomInputCurrencyMask from '@/utils/customInputCurrencyMask';
import produtonegocio from '@/validations/schemas/produtonegocio';

// const currencyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   const { value } = e.target;
//   e.target.value = CustomInputCurrencyMask.valor(value);
// };

const products = [
  { label: 'Produto A', value: 'a' },
  { label: 'Produto B', value: 'b' },
  { label: 'Produto C', value: 'c' },
  { label: 'Produto D', value: 'd' },
  { label: 'Produto E', value: 'e' },
  { label: 'Produto F', value: 'f' },
  { label: 'Produto G', value: 'g' },
  { label: 'Produto H', value: 'h' },
  { label: 'Produto I', value: 'i' },
] as const;

const Product = () => {
  const { control, getValues, setValue} = useFormContext();
  const [quantity, setQuantity] = useState(0);
  const [unitPrice, setUnitPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const calculateTotal = (quantity:number, unitPrice: number, discount:number): number => {
    return (quantity * unitPrice) - discount;
  };

  useEffect(() => {
    setTotal(calculateTotal(quantity, unitPrice, discount));
    setValue('totalprod', total.toString());
  }, [quantity, unitPrice, discount]);

  const changedQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    setQuantity(newValue);
  };

  const changedDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || 0;
    setDiscount(newValue);
    setValue('desconto', newValue);
  };

  const changedUnitPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue =parseFloat(e.target.value) || 0;
    // e.target.value = CustomInputCurrencyMask.valor(e.target.value);
    setUnitPrice(newValue);
  };

  const form = useForm<z.infer<typeof produtonegocio>>({
    resolver: zodResolver(produtonegocio),
  });
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = form.getValues();
    console.log(data);
    console.log(selectedProducts);
  };

  return (
    <div className='flex flex-col'>
      <form onSubmit={handleSubmit} className='py-2 px-2 flex flex-col gap-4'>
        {/** Produtos */}
        <FormField
          control={control}
          name='codprod'
          render={({ field }) => (
            <FormItem className='flex flex-col w-full'>
              <FormLabel className='text-slate-900 pb-2.5'>Produto</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      aria-expanded={open}
                      variant='outline' 
                      role='combobox'
                      className={cn('w-full h-10 justify-between bg-slate-50 focus:bg-white text-muted-foreground font-normal',
                        !field.value && 'text-muted-foreground font-normal'
                      )}>
                      {field.value 
                        ? products.find(
                          (product) => product.value === field.value
                        )?.label
                        : 'Selecione um produto'
                      }
                      <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className='w-inherit p-0'>
                  <Command>
                    <CommandInput placeholder='Procure um produto' />
                    <CommandEmpty>Não encontrado</CommandEmpty>
                    <CommandList>
                      <CommandGroup>
                        {products.map((product) => (
                          <CommandItem 
                            value={product.label}
                            key={product.value}
                            onSelect={() => {
                              setValue('codprod', product.value);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn('mr-2 h-4 w-4',
                                product.value === field.value
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              )}
                            />
                            <span>{product.label}</span>
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />

        <div className='flex items-start gap-2'>  
          {/** Quantidade de Produto */}
          <FormField
            control={control}
            name='quantidade'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/3'>
                <FormLabel className='text-slate-900 pb-2.5'>Quantidade</FormLabel>
                <FormControl>
                  <Input
                    value={quantity}
                    className='bg-slate-50 text-muted-foreground text-center text-sm focus:bg-slate-100 focus:outline-none focus:ring-0 hover:bg-slate-100 caret-invisible'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      changedQuantity(e);
                      setValue('quantidade', Number(e.target.value) || 0);
                      setQuantity(Number(e.target.value) || 0);
                      field.onChange(e);
                    }}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <X size={16} className='mt-6 self-center'/>

          {/** Valor Unitário */}
          <FormField
            control={control}
            name='valor'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/2'>
                <FormLabel className='text-slate-900 pb-2.5'>Valor Unitário</FormLabel>
                <FormControl>
                  <Input
                    value={unitPrice}
                    placeholder="R$"
                    className='bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      changedUnitPrice(e);
                      setValue('valor', Number(e.target.value) || 0);
                      field.onChange(e);
                    }} />
                </FormControl>
              </FormItem>
            )}
          />
          <Minus size={16} className='mt-6 self-center'/>

          {/** Desconto */}
          <FormField
            control={control}
            name='desconto'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/2'>
                <FormLabel className='text-slate-900 pb-2.5'>Desconto</FormLabel>
                <FormControl>
                  <Input
                    value={discount} 
                    placeholder="R$"
                    className='bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      // currencyInputChange(e);
                      changedDiscount(e);
                      setValue('desconto', Number(e.target.value) || 0);
                      field.onChange(e);
                    }} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className='flex items-center justify-end gap-2'>
          <Equal size={16} className='mt-6 self-center'/>
          {/** Total */}
          <FormField
            control={control}
            name='totalprod'
            render={({ field }) => (
              <FormItem className='flex flex-col w-1/3 self-end'>
                <FormLabel className='text-slate-900 pb-2.5'>Total</FormLabel>
                <FormControl>
                  <Input
                    value={total}
                    placeholder='R$'
                    className='bg-slate-50 text-slate-900 hover:bg-slate-100 hover:placeholder:text-slate-900 hover:text-slate-900 focus:bg-white'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      field.onChange(e);
                    }} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button
          type='button'
          onClick={(e)=> {
            e.preventDefault();
            const formData = getValues();
            const selectedProduct = products.find((product) => product.value === formData.codprod);
            if (selectedProduct) {
              const newProduct = {
                label: selectedProduct.label,
                quantity: quantity,
                unitPrice: formData.valor, 
                discount: formData.desconto, 
                total: calculateTotal(Number(quantity), Number(unitPrice), Number(discount))
              };
              setSelectedProducts([...selectedProducts, newProduct]);
              setQuantity(0);
              setDiscount(0);
              setUnitPrice(0);
            }
          }}
          className='bg-green-200 hover:bg-green-300 w-10 self-end'><PlusIcon size={16} color='gray'/></Button>
      </form>
      <div className='border rounded-md my-2'>
        <Table>
          <TableHeader className='border-b text-xs'>
            <TableHead>Produto</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Unitário</TableHead>
            <TableHead>Desconto</TableHead>
            <TableHead>Total</TableHead>
            <TableHead></TableHead>
          </TableHeader>
          <TableBody className='text-xs'>
            {selectedProducts.map((product, index) => (
              <tr key={index}>
                <TableCell>{product.label}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.unitPrice}</TableCell>
                <TableCell>{product.discount}</TableCell>
                <TableCell>{product.total}</TableCell>
                <TableCell>
                  <Button variant='ghost'>
                    <Trash2Icon size={12}/>
                  </Button>
                </TableCell>
              </tr>
            ))}
          </TableBody>
          <TableFooter className='text-xs'>
            <TableCell></TableCell>
            <TableCell>totalquant</TableCell>
            <TableCell>totalunitario</TableCell>
            <TableCell>totaldesconto</TableCell>
            <TableCell>total</TableCell>
            <TableCell></TableCell>
          </TableFooter>
        </Table>
      </div>

      <Button onClick={(e) => {
        e.preventDefault();
        const values = getValues();
        console.log(values);
      }} type='submit' variant='outline' className='border-indigo-200 my-2 bg-slate-50 self-end'>Salvar alterações</Button>
    </div>
  );
};

export default Product;
