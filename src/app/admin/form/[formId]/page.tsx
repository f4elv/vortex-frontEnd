"use client";

import React, { useEffect, useState } from "react";
import { api } from "@/lib/api";
import { StatusSelect } from "../../components/StatusSelect";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

type ParamsType = {
	formId: string;
};

export default function FormPage({ params }: { params: Promise<ParamsType> }) {
	const { formId } = React.use(params);
	const [form, setForm] = useState<any>(null);
	const [status, setStatus] = useState("");

	const router = useRouter()

	async function load() {
		const res = await api.get(`/admin/${formId}`);
		setForm(res.data);
		setStatus(res.data.status);
	}

	async function update() {
		await api.patch(`/admin/${formId}/status`, { status });
		alert("Status atualizado!");
		load();
	}

	useEffect(() => {
		load();
	}, []);

	async function handleBack() {
		router.push("/admin")
	}

	if (!form) return <p className="text-center">Carregando...</p>;

	return (
		<div className="min-h-screen p-10 relative">

			<div className="flex justify-center items-center w-full mb-8">
				<Button
				variant="secondary"
				className="absolute left-0 ml-10"
				onClick={handleBack}
				>
					voltar
				</Button>
				<h1 className="text-5xl text-purple-600 relative">{form.company}</h1>
			</div>


			<div className="relative bg-black/40 p-8 border border-purple-700 rounded-2xl backdrop-blur-lg shadow-[0_0_20px_rgba(147,51,234,0.4)]">
				<div className="flex items-center justify-center gap-12 mb-6">
					<p className="text-2xl">
						<strong className="text-emerald-400">Contratante</strong>: {form.name}
					</p>
					<p className="text-2xl">
						<strong className="text-emerald-400">Telefone</strong>: {form.phone}
					</p>
				</div>

				<p className="text-2xl mb-6">
					<strong className="text-emerald-400">Descrição do Projeto</strong>: {form.projectDescription}
				</p>

				<div className="flex items-center justify-center gap-12 mb-6">
					<p className="text-2xl">
						<strong className="text-emerald-400">Prazo</strong>: {form.deadline}
					</p>
					<p className="text-2xl">
						<strong className="text-emerald-400">Orçamento</strong>: {form.budget}
					</p>
				</div>

				<div className="flex items-center justify-between">
					<p className="text-2xl">
						<strong className="text-emerald-400">Tipo do projeto</strong>: {form.projectType}
					</p>
					<div className="flex items-center justify-center gap-6">
						<p className="font-semibold">Atualizar Status:</p>
						<StatusSelect value={status} onChange={setStatus} />

						<Button 
							onClick={update} 
							variant="primary"
						>
							Salvar
						</Button>
					</div>

				</div>
			</div>
		</div>
	);
}
