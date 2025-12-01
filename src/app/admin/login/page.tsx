"use client";

import { useState } from "react";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    password: "",
  });

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/admin/login", form);
      localStorage.setItem("access_token", res.data.access_token);
      console.log(res.data.access_token)
      router.push("/admin");
    } catch (err) {
      alert("Credenciais inválidas");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">

      {/* fundo neon animado */}
      <div className="absolute inset-0 bg-purple-600/20 blur-3xl animate-pulse"></div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-black/40 border border-purple-600 rounded-2xl p-10 w-[380px] shadow-[0_0_40px_rgba(147,51,234,0.6)] backdrop-blur-xl"
      >
        <h1 className="text-3xl mb-6 font-bold text-purple-400 text-center">
          Painel Administrativo
        </h1>
        <div className="mb-6">
          <label className="block mb-1 text-sm text-purple-300">Senha</label>
          <input
            type="password"
            className="w-full p-3 bg-black/60 border border-purple-700 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button
          disabled={loading}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition-all rounded-xl font-bold shadow-lg"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
