"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Slide {
  heading: string;
  subheading: string;
  cta: string;
  href: string;
  gradient: string;
}

const slides: Slide[] = [
  {
    heading: "Transform Your Outdoor Space",
    subheading:
      "Premium synthetic turf that looks and feels like the real thing. Low-maintenance, lush, and built to last.",
    cta: "Shop Now",
    href: "/products",
    gradient: "from-emerald-800 via-emerald-700 to-green-600",
  },
  {
    heading: "Pet-Friendly Solutions",
    subheading:
      "Engineered turf that's safe, durable, and easy to clean. Antimicrobial treatment keeps it fresh all year round.",
    cta: "Learn More",
    href: "/products/pet-friendly-30mm",
    gradient: "from-green-900 via-emerald-800 to-teal-700",
  },
  {
    heading: "Free Quote — No Obligation",
    subheading:
      "Get expert advice on your project. Whether it's a backyard makeover or a commercial installation, we've got you covered.",
    cta: "Get a Quote",
    href: "/quote",
    gradient: "from-teal-800 via-emerald-700 to-green-800",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden">
      <div
        className={`bg-gradient-to-br ${slide.gradient} transition-all duration-700 ease-in-out`}
      >
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28 lg:py-36 text-center">
          {/* Decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full" />
            <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-white/5 rounded-full" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 tracking-tight">
              {slide.heading}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-emerald-100 leading-relaxed mb-8 max-w-2xl mx-auto">
              {slide.subheading}
            </p>
            <Link
              href={slide.href}
              className="inline-block bg-white text-emerald-700 font-bold text-base px-8 py-3.5 rounded-full hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-white scale-110 shadow"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
