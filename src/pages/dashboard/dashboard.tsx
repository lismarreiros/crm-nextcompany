import Kanban from '@/components/kanban';

export default function DashboardPage() {
  return (
    <div
      className="grid grid-cols-[260px_1fr_300px] bg-slate-200 h-full"
    >
      {/* barra de navegação esquerda */}
      <div className="bg-blue-500"></div>
      {/* kanban */}
      <Kanban />
      {/* barra de detalhes do card */}
      <div className="bg-blue-200"></div>
    </div>
  );
}
