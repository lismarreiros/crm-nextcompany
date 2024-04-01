import Kanban from '@/components/kanban';
import NavBar from '@/components/navbar/NavBar';
import Sidebar from '@/components/sidebar/Sidebar';

export default function DashboardPage() {
  return (
    <div>  
      {/** navbar */}
      <NavBar />
    
      <div className="grid grid-cols-[14vw_1fr_14vw] bg-slate-100">
        {/* barra de navegação esquerda */}
        <div className="bg-white rounded mt-10 h-full">
          <Sidebar />
        </div>
        
        {/* kanban */}
   
        <Kanban />

        {/* barra de detalhes do card */}
        <div className="bg-blue-200 h-full">

        </div> 
      </div> 
      
    </div>

  );
}
