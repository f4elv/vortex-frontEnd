"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { AdminCard } from "./components/AdminCard";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [forms, setForms] = useState<any[]>([]);
  const [filters, setFilters] = useState({
    status: "",
    projectType: "",
  });

  useEffect(() => {
    load();
  }, []);

  const router = useRouter();

  async function load() {
    const res = await api.get("/admin/forms");
    setForms(res.data);
  }

  async function logout() {
    await api.post("/auth/logout");

    localStorage.removeItem("access_token");

    router.push("/admin/login");
  }

  const filtered = forms.filter((f) => {
    return (
      (!filters.status || f.status === filters.status) &&
      (!filters.projectType || f.projectType === filters.projectType)
    );
  });

  return (
    <div className="min-h-screen p-10 relative">

      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-purple-400 relative mb-6">Formulários Recebidos</h1>
        <Button 
          variant="secondary"
          onClick={logout}

        >
          Logout
        </Button>
      </div>


      <div className="relative flex gap-4 mb-10 items-center">
        <span className="text-2xl">Status</span>
        <select
          className="bg-black/60 border border-purple-700 p-3 rounded-xl"
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="">Todos</option>
          <option value="NOVO">Novo</option>
          <option value="RESPONDIDO">Respondido</option>
          <option value="EM_ANDAMENTO">Em andamento</option>
          <option value="CANCELADO">Cancelado</option>
          <option value="FINALIZADO">Finalizado</option>
        </select>

        <span className="text-2xl">Tipo do projeto</span>
        <select
          className="bg-black/60 border border-purple-700 p-3 rounded-xl"
          onChange={(e) => setFilters({ ...filters, projectType: e.target.value })}
        >
          <option value="">Todos</option>
          <option value="LANDING">Landing</option>
          <option value="DASHBOARD">Dashboard</option>
          <option value="OUTRO">Outro</option>
        </select>
      </div>
      
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((form) => (
          <AdminCard key={form.id} form={form} />
        ))}
      </div>
    </div>
  );
}
