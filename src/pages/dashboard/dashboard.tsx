import Kanban from '@/components/kanban';
import NavBar from '@/components/navbar/NavBar';

export default function DashboardPage() {
  return (
    <div>
      {/** navbar */}
      <NavBar />

      <div className="grid grid-cols-[12vw_1fr_12vw] bg-slate-100">
        {/* barra de navegação esquerda */}
        <div className="bg-blue-500"></div>
        {/* kanban */}
        <Kanban />
        {/* barra de detalhes do card */}
        <div className="bg-blue-200"></div>
      </div>
    </div>
  );
}
