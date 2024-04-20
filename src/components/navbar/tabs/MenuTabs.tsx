import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@/components/shadcn/ui/menubar';
import React from 'react';
import { Link } from 'react-router-dom';

function MenuTabs() {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger >Configurações</MenubarTrigger>
          <MenubarContent>
            <MenubarItem> 
              Fluxo de Oportunidade
              {/* <MenubarShortcut>⌘T</MenubarShortcut> */}
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Tipos de Atividade</MenubarItem>
            <MenubarItem>Ramo de Atividade</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Fonte</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Negócios</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Negócios</MenubarItem>
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
