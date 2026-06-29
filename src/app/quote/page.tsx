"use client";

import QuoteForm from "@/components/QuoteForm";
import { FileText, Clock, Shield, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: FileText,
    title: "Detailed Estimate",
    description: "Get a comprehensive quote tailored to your project requirements",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "We respond to all quote requests within 24 hours",
  },
  {
    icon: Shield,
    title: "No Obligation",
    description: "Our quotes are completely free with no strings attached",
  },
  {
    icon: DollarSign,
    title: "Best Price Guarantee",
    description: "Competitive pricing on all our premium turf products",
  },
];

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Tell us about your project and we will provide a detailed, no-obligation quote
            within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-slate-800 mb-6">Project Details</h2>
              <QuoteForm />
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-6">Why Request a Quote?</h2>
            <div className="space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{b.title}</h3>
                    <p className="text-sm text-slate-500 mt-1">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="font-semibold text-emerald-800 mb-2">Need help sooner?</h3>
              <p className="text-sm text-emerald-700 mb-3">
                Call us for immediate assistance with your project.
              </p>
              <p className="text-lg font-bold text-emerald-800">(03) XXXX XXXX</p>
              <p className="text-xs text-emerald-600 mt-1">Mon-Fri 8am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
