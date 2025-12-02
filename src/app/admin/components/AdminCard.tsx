import Link from "next/link";
import { StatusBadge } from "./StatusBadge";

export function AdminCard({ form }: any) {
  return (
    <Link
      href={`/admin/form/${form.id}`}
      className="bg-black/40 border border-purple-700 hover:border-purple-400 transition-all rounded-xl p-5 shadow-[0_0_15px_rgba(147,51,234,0.4)] backdrop-blur-lg"
    >
      <h3 className="font-semibold mb-2">{form.company}</h3>
      <p className="mb-2">{form.name}</p>
      <div className="flex justify-between items-center">
        <StatusBadge status={form.status} />
        <p>{form.projectType}</p>
      </div>
    </Link>
  );
}
