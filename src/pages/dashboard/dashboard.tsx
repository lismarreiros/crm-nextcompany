import Kanban from '@/components/kanban';
import Sidebar from '@/components/sidebar/Sidebar';

export default function DashboardPage() {
  return (
    <div className='w-full min-h-screen'> 
      <div className="grid grid-cols-[14vw_1fr] bg-gradient-to-r from-indigo-300 to-indigo-100 pr-2 min-h-screen">
        {/* barra de navegação esquerda */}
        <div className="bg-white rounded mt-8 h-full">
          <Sidebar />
        </div>
        
        {/* kanban */}
        <Kanban />

      </div> 
      
    </div>

  );
}
