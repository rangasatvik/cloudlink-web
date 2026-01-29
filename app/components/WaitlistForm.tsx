"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);

      const res = await fetch("https://formspree.io/f/mlgnlgze", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error("Form submit failed");

      // ✅ stay on Cloudlink and go to your thank-you page
      window.location.href = "/thanks";
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-3 md:grid-cols-2">
      <input
        name="name"
        required
        className="rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-sm"
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        required
        className="rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-sm"
        placeholder="Work email"
      />
      <input
        name="company"
        className="rounded-lg bg-black/40 border border-white/15 px-4 py-3 text-sm md:col-span-2"
        placeholder="Company (optional)"
      />

      <button
        type="submit"
        disabled={loading}
        className="md:col-span-2 rounded-lg bg-white px-5 py-3 font-semibold text-black hover:bg-white/90 disabled:opacity-60"
      >
        {loading ? "Submitting..." : "Request access"}
      </button>

      {error && (
        <p className="md:col-span-2 text-sm text-red-300">{error}</p>
      )}
    </form>
  );
}
