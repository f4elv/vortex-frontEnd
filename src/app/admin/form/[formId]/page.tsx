"use client";

import React, { useEffect, useState, use } from "react";
import { api } from "@/lib/api";
import { StatusSelect } from "../../components/StatusSelect";

type ParamsType = {
	formId: string;
};

export default function FormPage({ params }: { params: Promise<ParamsType> }) {
	const { formId } = React.use(params);
	const [form, setForm] = useState<any>(null);
	const [status, setStatus] = useState("");

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

	if (!form) return <p className="text-white">Carregando...</p>;

	return (
		<div className="min-h-screen p-10 bg-black text-white relative">
			<div className="absolute inset-0 bg-purple-600/10 blur-2xl animate-pulse"></div>

			<h1 className="text-4xl text-purple-400 font-bold relative mb-6">{form.name}</h1>

			<div className="relative bg-black/40 p-8 border border-purple-700 rounded-2xl backdrop-blur-lg shadow-[0_0_20px_rgba(147,51,234,0.4)]">
				<p>
					<strong>Empresa:</strong> {form.company}
				</p>
				<p>
					<strong>Telefone:</strong> {form.phone}
				</p>
				<p>
					<strong>Tipo de Projeto:</strong> {form.projectType}
				</p>
				<p>
					<strong>Prazo:</strong> {form.deadline}
				</p>
				<p>
					<strong>Orçamento:</strong> {form.budget}
				</p>
				<p className="mt-4">
					<strong>Descrição:</strong> {form.projectDescription}
				</p>

				<div className="mt-6">
					<p className="mb-2 font-semibold">Atualizar Status:</p>
					<StatusSelect value={status} onChange={setStatus} />

					<button onClick={update} className="mt-4 px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition-all shadow-lg">
						Salvar
					</button>
				</div>
			</div>
		</div>
	);
}
