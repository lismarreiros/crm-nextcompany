import Kanban from '@/components/kanban';

export default function DashboardPage() {
  return (
    <div
      className="grid grid-cols-[15vw_1fr_15vw] bg-slate-100"
    >
      {/* barra de navegação esquerda */}
      <div className="bg-blue-500 h-[100vh]"></div>
      {/* kanban */}
      <Kanban />
      {/* barra de detalhes do card */}
      <div className="bg-blue-200"></div>
    </div>
  );
}
