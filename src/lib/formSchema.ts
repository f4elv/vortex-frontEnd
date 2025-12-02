import { z } from "zod";
import { ProjectType } from "@/lib/utils";

export const StepOneSchema = z.object({
  name: z.string().min(3, "Seu nome precisa ter pelo menos 3 caracteres"),
  phone: z.string().min(8, "Número inválido"),
  company: z.string().min(2, "Informe a empresa ou nome do projeto"),
  projectDescription: z
    .string()
    .min(10, "Descreva um pouco mais o projeto (mínimo 10 caracteres)"),
  deadline: z.string().min(2, "Informe um prazo aproximado"),
  budget: z.string().min(1, "Informe um orçamento estimado"),
});

export const StepTwoSchema = z.object({
  projectType: z.enum(ProjectType, {
    message: "Selecione um tipo de projeto válido",
  }),
  extraDetails: z.string().optional(),
});


export const FullFormSchema = StepOneSchema.extend(StepTwoSchema);

export type StepOneData = z.infer<typeof StepOneSchema>;
export type StepTwoData = z.infer<typeof StepTwoSchema>;
export type FullFormData = z.infer<typeof FullFormSchema>;