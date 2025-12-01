export function StatusSelect({ value, onChange }: any) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="p-3 bg-black/50 border border-purple-600 rounded-xl"
    >
      <option value="NOVO">Novo</option>
      <option value="RESPONDIDO">Respondido</option>
      <option value="EM_ANDAMENTO">Em andamento</option>
      <option value="CANCELADO">Cancelado</option>
      <option value="FINALIZADO">Finalizado</option>
    </select>
  );
}
