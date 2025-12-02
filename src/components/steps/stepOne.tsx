"use client";

import { formData } from "@/lib/utils";
import { StepOneSchema } from "@/lib/formSchema";
import { useState } from "react";

interface StepOneProps {
  onContinue: () => void;
  updateField: (field: string, value: any) => void;
  data: formData
}

import Button from "@/components/ui/button";

export default function StepOne({ onContinue, updateField, data }: StepOneProps, ) {
  const [error, setErrors] = useState<any>()


  function handleNext() {
    const result = StepOneSchema.safeParse(data);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});
    onContinue();
  }
  return (
    <div className="
      w-full max-w-4xl
      bg-white/5 border border-white/10 backdrop-blur-xl
      rounded-3xl p-6 sm:p-10
      shadow-lg animate-fade-in
    ">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
        Nos conte mais sobre o seu projeto
      </h2>
      <p className="text-center mb-6 text-sm sm:text-base">
        Isso nos ajuda a entender escopo, prazos e abordagem ideal para sua marca.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input 
        className="input" 
        placeholder="Seu Nome"
        value={data.name || ""}
        onChange={(e) => updateField("name", e.target.value)}
        />

        <input 
        className="input" 
        placeholder="Número de Trabalho" 
        value={data.phone || ""}
        onChange={(e) => updateField("phone", e.target.value)}
        />

        <input
          className="input sm:col-span-2"
          placeholder="Empresa / Projeto"
          value={data.company || ""}
          onChange={(e) => updateField("company", e.target.value)}
        />

        <textarea
          className="input sm:col-span-2"
          rows={4}
          placeholder="Descrição do Projeto"
          value={data.projectDescription || ""}
          onChange={(e) => updateField("projectDescription", e.target.value)}
        />

        <input 
          className="input" 
          placeholder="Prazo Ideal" 
          value={data.deadline || ""}
          onChange={(e) => updateField("deadline", e.target.value)}
        />

        <input 
           className="input" 
          placeholder="Orçamento Estimado"
          value={data.budget || ""}
          onChange={(e) => updateField("budget", e.target.value)} 
        />
      </div>

      <Button
        variant="primary"
        onClick={handleNext}
        className="w-full mt-6"
        >
        Continuar
      </Button>
    </div>
  );
}
