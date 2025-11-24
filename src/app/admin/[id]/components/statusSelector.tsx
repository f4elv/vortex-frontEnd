// app/admin/[id]/StatusSelector.tsx
"use client";

import { useState } from "react";

export default function StatusSelector({
  id,
  current,
  statuses,
}: {
  id: string;
  current: string;
  statuses: string[];
}) {
  const [status, setStatus] = useState(current);
  const [loading, setLoading] = useState(false);

  const updateStatus = async (value: string) => {
    setStatus(value);
    setLoading(true);

    await fetch(`/api/forms/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: value }),
    });

    setLoading(false);
  };

  return (
    <select
      value={status}
      onChange={(e) => updateStatus(e.target.value)}
      disabled={loading}
      className="px-4 py-2 rounded-lg bg-black/30 border border-white/10 outline-none"
    >
      {statuses.map((s) => (
        <option key={s} value={s} className="bg-black text-white">
          {s}
        </option>
      ))}
    </select>
  );
}
