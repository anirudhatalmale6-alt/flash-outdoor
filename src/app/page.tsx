"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import QuoteForm from "@/components/QuoteForm";
import { getFeaturedProducts, categories } from "@/lib/products";

const benefits = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
    title: "UV Resistant",
    desc: "Won't fade or degrade under harsh Australian sun. Rated 5000+ hours UV exposure.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
    title: "Pet Friendly",
    desc: "Antimicrobial treatment and enhanced drainage. Safe for dogs, cats, and kids.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Low Maintenance",
    desc: "No mowing, watering, or fertilising. Looks green all year round with zero effort.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "15 Year Warranty",
    desc: "Backed by manufacturer warranty for total peace of mind on your investment.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Melbourne, VIC",
    text: "Absolutely transformed our backyard. The kids play on it every day and it still looks brand new after 2 years. Best home investment we've made.",
    rating: 5,
  },
  {
    name: "James T.",
    location: "Sydney, NSW",
    text: "Had Flash Outdoor turf installed around our pool area. Looks incredible, drains perfectly after rain, and no more mud tracked through the house.",
    rating: 5,
  },
  {
    name: "Lisa & Mark K.",
    location: "Brisbane, QLD",
    text: "Our two labradors used to destroy the lawn. Now we have a beautiful green yard all year round. The pet-friendly turf handles everything — highly recommend.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How long does synthetic turf last?",
    a: "Our premium synthetic turf is built to last 15-20 years with proper installation and basic maintenance. All our turf products come with a manufacturer warranty of 10-15 years.",
  },
  {
    q: "Is synthetic turf safe for pets?",
    a: "Absolutely. Our Pet Friendly range features antimicrobial treatment and enhanced drainage to handle pet use. The turf is non-toxic and safe for all animals. Pet waste is easy to clean — simply hose down the area.",
  },
  {
    q: "Does artificial grass get hot in summer?",
    a: "Standard synthetic turf can warm up in direct sun, but our CoolTouch Sport range uses advanced cooling yarn technology that keeps the surface up to 30% cooler than standard turf. For shaded areas, heat is rarely a concern.",
  },
  {
    q: "How do I maintain synthetic turf?",
    a: "Maintenance is minimal. Occasionally brush the fibres with a stiff broom to keep them upright, rinse with water to remove dust, and remove any debris. No mowing, watering, or fertilising needed.",
  },
  {
    q: "Can I install synthetic turf myself?",
    a: "Yes! We sell all the accessories you need for a DIY installation — turf nails, U-pins, joining tape, and silica sand. We also provide installation guides. For larger areas or complex shapes, we recommend professional installation.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes, we offer free no-obligation quotes. Simply fill out our quote request form with your project details and measurements, and we'll get back to you within 24 hours with a detailed estimate.",
  },
];

export default function Home() {
  const featured = getFeaturedProducts();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] bg-repeat" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300">
              Premium Synthetic Turf
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A Perfect Lawn.
              <br />
              <span className="text-emerald-400">Every Single Day.</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-emerald-100/80 sm:text-xl">
              Transform your outdoor space with premium synthetic turf that
              looks and feels like the real thing — without the mowing,
              watering, or maintenance.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-emerald-400 active:scale-[0.98]">
                Shop Now
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/quote" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10 active:scale-[0.98]">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Why Choose Flash Outdoor
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Quality you can trust, backed by warranty and built to last
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all hover:border-emerald-200 hover:shadow-md"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                {b.icon}
              </div>
              <h3 className="mt-6 text-lg font-semibold text-slate-900">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Category */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Shop by Category
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              Everything you need for a stunning outdoor space
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className={`aspect-[16/9] ${cat.slug === "synthetic-turf" ? "bg-gradient-to-br from-emerald-600 to-emerald-800" : "bg-gradient-to-br from-slate-600 to-slate-800"}`}>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <span className="text-sm font-medium text-white/70">
                      {cat.productCount} products
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                      {cat.name}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-white/80">
                      {cat.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors group-hover:text-white">
                      Shop now
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Our most popular turf and accessories
            </p>
          </div>
          <Link
            href="/products"
            className="hidden items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 sm:inline-flex"
          >
            View all products
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link href="/products" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-emerald-700 active:scale-[0.98]">
            View All Products
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Join hundreds of happy homeowners across Australia
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <svg
                      key={si}
                      className="h-5 w-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Quote CTA */}
      <section className="bg-emerald-600 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Get a Free Quote
              </h2>
              <p className="mt-4 text-lg text-emerald-100">
                Tell us about your project and we&apos;ll provide a detailed
                estimate within 24 hours. No obligation, no pressure.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Free no-obligation quote",
                  "Response within 24 hours",
                  "Expert advice on turf selection",
                  "Accurate measurements and pricing",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-emerald-50">
                    <svg className="h-5 w-5 flex-shrink-0 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-xl">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Everything you need to know about synthetic turf
          </p>
        </div>
        <div className="mt-12 divide-y divide-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-base font-medium text-slate-900">
                  {faq.q}
                </span>
                <svg
                  className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openFaq === i && (
                <p className="pb-5 text-sm leading-relaxed text-slate-500">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
