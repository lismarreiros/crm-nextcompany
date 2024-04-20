import { Avatar, AvatarFallback, AvatarImage } from '@/components/shadcn/ui/avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/shadcn/ui/popover';
import { Separator } from '@/components/shadcn/ui/separator';
import { Button } from '../shadcn/ui/button';
import { LogOutIcon, Settings, User2 } from 'lucide-react';
import MenuTabs from './tabs/MenuTabs';

const NavBar = () => {
  return (
    <div className='bg-white h-12 px-2 py-4 my-2 w-full sm:px-6
      lg:px-8 flex justify-between items-center'>
      {/* logo */}
      <div className='flex items-end gap-8 px-2'>
        <div>
          <span className='text-xs text-slate-500 font-bold py-2'>Empresa</span>
          <h1 className='text-lg font-bold text-slate-900'>NextCompany</h1>
        </div>
        <div>
          <MenuTabs/>
        </div>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent align={'end'}>
          <div className='py-2'>
            <h4 className='text-sm font-bold text-slate-900'>José Pérez</h4>
            <h6 className='text-sm text-slate-900'>jose@email.com</h6>
          </div>
          <Separator />
          <div className='py-2'>
            <Button className='flex justify-between w-full bg-transparent 
            text-slate-900 font-medium hover:bg-slate-100'>
              Perfil
              <User2 className='w-4 h-4' />
            </Button>
            <Button className='flex justify-between w-full bg-transparent 
            text-slate-900 font-medium hover:bg-slate-100'>
              Configurações
              <Settings className='w-4 h-4' />
            </Button>
          </div>
          <Separator />
          <div className='py-2'>
            <Button className='flex justify-between w-full bg-transparent 
            text-slate-900 font-medium hover:bg-slate-100'>
              Sair
              <LogOutIcon className='w-4 h-4' />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  
  );
};

export default NavBar;
