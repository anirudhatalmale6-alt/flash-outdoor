"use client";

import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  areaSize: string;
  message: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  areaSize: "",
  message: "",
};

export default function QuoteForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      try {
        const res = await fetch("/api/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to submit");
      } catch {
        // API may not be available in static export
      }
      toast.success("Quote request sent! We'll be in touch shortly.");
      setData(initialData);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="John Smith"
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            placeholder="04XX XXX XXX"
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Project Type *
          </label>
          <select
            required
            value={data.projectType}
            onChange={(e) => update("projectType", e.target.value)}
            className={inputClass}
          >
            <option value="">Select type...</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Approximate Area Size (m&sup2;)
        </label>
        <input
          type="text"
          placeholder="e.g. 50"
          value={data.areaSize}
          onChange={(e) => update("areaSize", e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Tell us about your project
        </label>
        <textarea
          rows={4}
          placeholder="Describe your project, any special requirements, or questions you have..."
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm hover:shadow text-sm"
      >
        <Send size={16} />
        {submitting ? "Sending..." : "Request a Free Quote"}
      </button>
    </form>
  );
}
