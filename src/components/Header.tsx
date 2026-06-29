"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, Menu, X, Phone, Clock } from "lucide-react";
import { useCartStore } from "@/store/cart";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products?category=synthetic-turf", label: "Synthetic Turf" },
  { href: "/products?category=accessories", label: "Accessories" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const totalItems = useCartStore((s) => s.totalItems());

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-emerald-700 text-white text-sm">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between py-1.5 gap-4 flex-wrap">
          <span className="font-medium tracking-wide">
            Free Shipping on Orders Over $500
          </span>
          <div className="flex items-center gap-5 text-emerald-100">
            <span className="flex items-center gap-1.5">
              <Phone size={14} />
              (03) XXXX XXXX
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock size={14} />
              Mon–Fri 8am – 5pm
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-slate-900 text-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2 group">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-600 text-white font-black text-lg leading-none group-hover:bg-emerald-500 transition-colors">
              F
            </span>
            <span className="text-xl font-bold tracking-tight">
              Flash<span className="text-emerald-400">Outdoor</span>
            </span>
          </Link>

          {/* Search — hidden on mobile, shown md+ */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex flex-1 max-w-lg mx-6"
          >
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-slate-800 border border-slate-700 pl-4 pr-10 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          {/* Cart + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-slate-800 transition-colors"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-[11px] font-bold leading-none">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-full hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block bg-slate-800 border-t border-slate-700">
        <div className="mx-auto max-w-7xl px-4 flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700 shadow-xl">
          {/* Mobile search */}
          <form onSubmit={handleSearch} className="px-4 pt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-slate-800 border border-slate-700 pl-4 pr-10 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-slate-400"
              >
                <Search size={18} />
              </button>
            </div>
          </form>
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
