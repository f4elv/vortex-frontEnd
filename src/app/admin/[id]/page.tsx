// app/admin/[id]/page.tsx
import StatusSelector from "./components/statusSelector";

async function getForm(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/forms/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

async function getStatuses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/status`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function FormDetails({ params }: any) {
  const form = await getForm(params.id);
  const statuses = await getStatuses();

  if (!form) return <p className="p-6">Formulário não encontrado.</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">
        Formulário de {form.name}
      </h1>

      <div className="space-y-4 bg-white/5 border border-white/10 p-6 rounded-xl shadow-sm">
        <p><strong>Nome:</strong> {form.name}</p>
        <p><strong>Email:</strong> {form.email}</p>
        <p><strong>Telefone:</strong> {form.phone}</p>
        <p><strong>Projeto:</strong> {form.projectType}</p>
        <p><strong>Mensagem:</strong> {form.message}</p>

        <div className="pt-4">
          <strong className="block mb-2">Status do Atendimento</strong>
          <StatusSelector
            id={form.id}
            current={form.status}
            statuses={statuses}
          />
        </div>
      </div>
    </div>
  );
}
