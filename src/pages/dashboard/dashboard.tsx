import Kanban from '@/components/kanban';

export default function DashboardPage() {
  return (
    <div className='w-full min-h-screen'> 
      <div className="grid grid-cols-1 bg-gradient-to-r from-indigo-300 to-indigo-100 pr-2 min-h-screen">
        <Kanban />
      </div> 
      
    </div>

  );
}
