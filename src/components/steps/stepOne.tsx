"use client";

interface StepOneProps {
  onContinue: () => void;
}

import Button from "@/components/ui/button";

export default function StepOne({ onContinue }: StepOneProps) {
  return (
    <div className="w-full bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 shadow-lg animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        Nos conte mais sobre o seu projeto
      </h2>

      <p className="text-center mb-6">
        Isso nos ajuda a entender escopo, prazos e abordagem ideal para sua marca.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <input
          className="px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-600 outline-none transition"
          placeholder="Seu Nome"
          type="text"
        />
        <input
          className="px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-600 outline-none transition"
          placeholder="Número de Trabalho"
          type="telephone"
        />

        <input
          className="px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-600 outline-none transition col-span-2"
          placeholder="Empresa / Projeto"
          type="text"
        />

        <textarea
          rows={4}
          className="px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-600 outline-none transition col-span-2"
          placeholder="Descrição do Projeto"
        />

        <input
          className="px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-600 outline-none transition"
          placeholder="Prazo Ideal"
          type="text"
        />
        <input
          className="px-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-purple-600 outline-none transition"
          placeholder="Orçamento Estimado"
          type="text"
        />
      </div>

        <Button onClick={onContinue} className="w-full mt-6">Continuar</Button>
      </div>
  );
}
