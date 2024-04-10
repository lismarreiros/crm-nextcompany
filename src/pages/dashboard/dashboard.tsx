import Kanban from '@/components/kanban';
import NavBar from '@/components/navbar/NavBar';
import Sidebar from '@/components/sidebar/Sidebar';

export default function DashboardPage() {
  return (
    <div>  
      {/** navbar */}
      <NavBar />
    
      <div className="grid grid-cols-[10vw_1fr] bg-slate-100 pr-2">
        {/* barra de navegação esquerda */}
        <div className="bg-white rounded-md mt-10 h-full">
          <Sidebar />
        </div>
        
        {/* kanban */}
   
        <Kanban />

      </div> 
      
    </div>

  );
}
