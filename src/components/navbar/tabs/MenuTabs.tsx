import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/shadcn/ui/menubar';
import React from 'react';
import { Link } from 'react-router-dom';

function MenuTabs() {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <Link to='/'>
            <MenubarTrigger>Kanban</MenubarTrigger>
          </Link>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger >Configurações</MenubarTrigger>
        
          <MenubarContent>
            <Link to='/fluxo'>
              <MenubarItem> 
              Fluxo de Oportunidade
                {/* <MenubarShortcut>⌘T</MenubarShortcut> */}
              </MenubarItem>
            </Link>
        
            <MenubarSeparator />
            <Link to='/tipoatividade'>
              <MenubarItem>Tipos de Atividade</MenubarItem>
            </Link>
        
            <Link to='/ramoatividade'>
              <MenubarItem>Ramo de Atividade</MenubarItem>
            </Link>
        
            <MenubarSeparator />
            <Link to='/fonte'>
              <MenubarItem>Fonte</MenubarItem>
            </Link>
     
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Negócios</MenubarTrigger>
        
          <MenubarContent>
            <Link to='/negocios'>
              <MenubarItem>Negócios</MenubarItem>
            </Link>
        
            <MenubarSeparator/>
        
            <Link to='/produtos'>
              <MenubarItem>Produtos</MenubarItem>
            </Link>

            <Link to='/clientes'>
              <MenubarItem>Clientes</MenubarItem>
            </Link>
        
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

    </div>
  );
}

export default MenuTabs;
