import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// DnD
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

// import { Inter } from 'next/font/google';

// Components
import Container from '@/components/kanban/components/Container';
import Items from '@/components/kanban/components/Item';
import Modal from '@/components/kanban/components/Modal';
import Input from '@/components/kanban/components/Input';
import { Button } from '@/components/shadcn/ui/button';
import { Dialog, DialogContent } from '@/components/shadcn/ui/dialog';
import InputModal from '@/components/kanban/components/Input';
import { CirclePlus } from 'lucide-react';
import { InputMasks } from '../shadcn/ui/input';
import { useOpportunityFlowContext } from '@/pages/configurations/flow/OpportunityFlowContext';
import { useOpportunityFlow } from '@/hook/useOportunityFlow';
import { Textarea } from '../shadcn/ui/textarea';

// const inter = Inter({ subsets: ['latin'] });

type DNDType = {
  id: UniqueIdentifier;
  opportunityFlowsId: number;
  title: string;
  items: {
    id: UniqueIdentifier;
    bussinessId: number;
    title: string;
    status: string;
  }[];
};

export default function Kanban() {
  // const { opportunityFlows } = useOpportunityFlowContext();
  const [containers, setContainers] = useState<DNDType[]>([]);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [currentContainerId, setCurrentContainerId] =
    useState<UniqueIdentifier>();
  const [containerName, setContainerName] = useState('');
  const [itemName, setItemName] = useState('');
  const [showAddContainerModal, setShowAddContainerModal] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);

  const { opportunityFlowsWithBussiness, swapOpportunityFlows, changeOpportunityFlowOfBussiness } = useOpportunityFlow();

  useEffect(() => {
    // Transformar os fluxos de oportunidade em containers
    const newContainers = opportunityFlowsWithBussiness.map((flow) => ({
      id: `container-${uuidv4()}`,
      opportunityFlowsId: flow.id,
      order: flow.order,
      title: flow.description,
      items: flow.bussiness ? flow.bussiness.map((bussiness) => ({
        id: `item-${uuidv4()}}`,
        bussinessId: bussiness.id,
        title: bussiness.description,
        status: flow.description,
      })) : [],
    }));
  
    // Definir os containers com os novos dados
    setContainers(newContainers.sort((a, b) => a.order - b.order));
  }, [opportunityFlowsWithBussiness]);
  
  const onAddContainer = () => {
    if (!containerName) return;
    const id = `container-${uuidv4()}`;
    setContainers([
      ...containers,
      {
        id,
        opportunityFlowsId: 0,
        title: containerName,
        items: [],
      },
    ]);
    setContainerName('');
    setShowAddContainerModal(false);
  };

  // Função de adicionar item em qualquer container - não está sendo utilizada no momento!
  // const onAddItem = () => {
  //   if (!itemName) return;
  //   const id = `item-${uuidv4()}`;
  //   const container = containers.find((item) => item.id === currentContainerId);
  //   if (!container) return;
  //   container.items.push({
  //     id,
  //     title: itemName,
  //     status: containers.filter((container) => container.id == currentContainerId)[0].title,
  //   });
  //   setContainers([...containers]);
  //   setItemName('');
  //   setShowAddItemModal(false);
  // };

  // Nova função para adicionar item, sempre no primeiro container. 
  const onAddItem = () => {
    if (!itemName) return;
    const id = `item-${uuidv4()}`;
    const firstContainer = containers[0];
    if (!firstContainer) return;

    firstContainer.items.push({
      id,
      bussinessId: 0,
      title: itemName,
      status: firstContainer.title,
    });

    setContainers([...containers]);
    setItemName('');
    setShowAddItemModal(false);
  };

  // Find the value of the items
  function findValueOfItems(id: UniqueIdentifier | undefined, type: string) {
    if (type === 'container') {
      return containers.find((item) => item.id === id);
    }
    if (type === 'item') {
      return containers.find((container) =>
        container.items.find((item) => item.id === id),
      );
    }
  }

  const findItemTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, 'item');
    if (!container) return '';
    const item = container.items.find((item) => item.id === id);
    if (!item) return '';
    return item.title;
  };

  const findContainerTitle = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, 'container');
    if (!container) return '';
    return container.title;
  };

  const findContainerItems = (id: UniqueIdentifier | undefined) => {
    const container = findValueOfItems(id, 'container');
    if (!container) return [];
    return container.items;
  };

  // DND Handlers
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragStart(event: DragStartEvent) {
    const { active } = event;
    const { id } = active;
    setActiveId(id);
  }

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;
    
    // Handle Items Sorting
    if (
      active.id.toString().includes('item') &&
      over?.id.toString().includes('item') &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active container and over container
      const activeContainer = findValueOfItems(active.id, 'item'); // fluxo 1
      const overContainer = findValueOfItems(over.id, 'item'); // fluxo 2

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id,
      );
      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        const newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex,
        );
        setContainers(newItems);
      } else {
        // In different containers
        const newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1,
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem,
        );
        setContainers(newItems);
      }
    }

    // Handling Item Drop Into a Container
    if (
      active.id.toString().includes('item') &&
      over?.id.toString().includes('container') &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, 'item');
      const overContainer = findValueOfItems(over.id, 'container');

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;

      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );

      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );

      // Remove the active item from the active container and add it to the over container
      const newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1,
      );

      const opportunityFlowsId = newItems[overContainerIndex].opportunityFlowsId;
      const bussinessId = removeditem.bussinessId;
      changeOpportunityFlowOfBussiness(bussinessId, opportunityFlowsId);
      
      // atualizando status do item
      removeditem.status = newItems[overContainerIndex].title;

      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
  };

  // This is the function that handles the sorting of the containers and items when the user is done dragging.
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    // Handling Container Sorting
    if (
      active.id.toString().includes('container') &&
      over?.id.toString().includes('container') &&
      active &&
      over &&
      active.id !== over.id
    ) {
      const item = containers.find((container) => container.id === over.id);
      console.log(item);
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === active.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === over.id,
      );
      // Swap the active and over container
      // alterar ordem do fluxo usando o endpoint switchOpportunityFlow
      swapOpportunityFlows(containers[activeContainerIndex].opportunityFlowsId, containers[overContainerIndex].opportunityFlowsId);

      let newItems = [...containers];
      newItems = arrayMove(newItems, activeContainerIndex, overContainerIndex);
      setContainers(newItems);
    }

    // Handling item Sorting
    if (
      active.id.toString().includes('item') &&
      over?.id.toString().includes('item') &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, 'item');
      const overContainer = findValueOfItems(over.id, 'item');

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );
      const overitemIndex = overContainer.items.findIndex(
        (item) => item.id === over.id,
      );

      // In the same container
      if (activeContainerIndex === overContainerIndex) {
        const newItems = [...containers];
        newItems[activeContainerIndex].items = arrayMove(
          newItems[activeContainerIndex].items,
          activeitemIndex,
          overitemIndex,
        );
        setContainers(newItems);
      } else {
        // In different containers
        const newItems = [...containers];
        const [removeditem] = newItems[activeContainerIndex].items.splice(
          activeitemIndex,
          1,
        );
        newItems[overContainerIndex].items.splice(
          overitemIndex,
          0,
          removeditem,
        );
        setContainers(newItems);
      }
    }
    // Handling item dropping into Container
    if (
      active.id.toString().includes('item') &&
      over?.id.toString().includes('container') &&
      active &&
      over &&
      active.id !== over.id
    ) {
      // Find the active and over container
      const activeContainer = findValueOfItems(active.id, 'item');
      const overContainer = findValueOfItems(over.id, 'container');

      // If the active or over container is not found, return
      if (!activeContainer || !overContainer) return;
      // Find the index of the active and over container
      const activeContainerIndex = containers.findIndex(
        (container) => container.id === activeContainer.id,
      );
      const overContainerIndex = containers.findIndex(
        (container) => container.id === overContainer.id,
      );
      // Find the index of the active and over item
      const activeitemIndex = activeContainer.items.findIndex(
        (item) => item.id === active.id,
      );

      const newItems = [...containers];
      const [removeditem] = newItems[activeContainerIndex].items.splice(
        activeitemIndex,
        1,
      );

      newItems[overContainerIndex].items.push(removeditem);
      setContainers(newItems);
    }
    setActiveId(null);
  }

  return (
    <div className='px-8 mt-10 h-full bg-inherit overflow-auto'>
      {/* Add Container Modal - NÃO ESTÁ SENDO USADO */}
      <Modal
        showModal={showAddContainerModal}
        setShowModal={setShowAddContainerModal}
      >
        <div className="flex flex-col w-full items-start gap-y-4">
          <h1 className="text-slate-700 text-xl font-bold">Adicionar Fase</h1>
          
          <Input
            type="text"
            placeholder="Digite o título"
            name="containername"
            value={containerName}
            onChange={(e) => setContainerName(e.target.value)}
          />
          <Button className='bg-indigo-700 hover:bg-indigo-500' onClick={onAddContainer}>Adicionar</Button>
        </div>
      </Modal>

      {/* Add Item Modal - NEGÓCIO */}
      <Dialog open={showAddItemModal} onOpenChange={setShowAddItemModal}>
        <DialogContent className='h-[60%]'>
          <div className="flex flex-col w-full items-start gap-y-4 py-6 static">
            {/* <h1 className="text-gray-800 text-3xl font-bold">Add Item</h1> */}
            <h1 className='text-lg font-medium'>Novo Négocio</h1>
            <label className='text-sm font-medium'>Descrição</label>
            <InputModal
              type="text"
              placeholder="Descrição"
              name="itemname"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <label className='text-sm font-medium'>Número do Contato</label>   
            <InputMasks
              mask='(99) 99999-9999'
              type="text"
              placeholder="Número"
              name="itemname"
            />
            <label className='text-sm font-medium'>Observação</label>
            <Textarea
              placeholder="Observação"
              name="obs"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button className='bg-indigo-900 hover:bg-indigo-700' onClick={onAddItem}>Adicionar</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/** Botão de Adicionar Novo Negócio */}
      <div className="flex items-center justify-start absolute gap-2">
        {/* <h1 className="text-gray-800 text-3xl font-bold">Dnd-kit Guide</h1> */}
        {/* <Button onClick={() => setShowAddContainerModal(true)} className='gap-2 bg-indigo-700'>
          <CirclePlus size={16}/>
          Fase
        </Button> */}
        <Button onClick={() => setShowAddItemModal(true)} className='gap-2 bg-indigo-700'>
          <CirclePlus size={16}/>
          Negócio
        </Button>
       
      </div>

      <div className="my-8">
        <div className="flex gap-x-4">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragMove={handleDragMove}
            onDragEnd={handleDragEnd}
          >
            <SortableContext items={containers.map((i) => i.id)}>
              {containers.map((container) => (
                <Container
                  id={container.id}
                  title={container.title}
                  key={container.id}
                  onAddItem={() => {
                    setShowAddItemModal(true);
                    setCurrentContainerId(container.id);
                  }}
                >
                  <SortableContext items={container.items.map((i) => i.id)}>
                    <div className="flex items-start flex-col gap-y-4">
                      {container.items.map((i) => (
                        <Items title={i.title} bussinessId={i.bussinessId} id={i.id} key={i.id} status={i.status} />
                      ))}
                    </div>
                  </SortableContext>
                </Container>
              ))}
            </SortableContext>
            <DragOverlay adjustScale={false}>
              {/* Drag Overlay For item Item */}
              {activeId && activeId.toString().includes('item') && (
                <Items id={activeId} bussinessId={0} title={findItemTitle(activeId)} status={findContainerTitle(activeId)} />
              )}
              {/* Drag Overlay For Container */}
              {activeId && activeId.toString().includes('container') && (
                <Container id={activeId} title={findContainerTitle(activeId)}>
                  {findContainerItems(activeId).map((i) => (
                    <Items key={i.id} bussinessId={i.bussinessId} title={i.title} id={i.id} status={findContainerTitle(activeId)}/>
                  ))}
                </Container>
              )}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  );
}
