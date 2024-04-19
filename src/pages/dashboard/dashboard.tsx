import Kanban from '@/components/kanban';
import Sidebar from '@/components/sidebar/Sidebar';

export default function DashboardPage() {
  return (
    <div> 
      <div className="grid grid-cols-[14vw_1fr] bg-gradient-to-r from-indigo-300 to-indigo-100 pr-2">
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
