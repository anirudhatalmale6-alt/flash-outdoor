"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { searchProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Search } from "lucide-react";
import type { Product } from "@/lib/products";

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
      setResults(searchProducts(initialQuery));
    }
  }, [initialQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setResults(searchProducts(query));
    window.history.replaceState(null, "", `/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Search Products</h1>
          <form onSubmit={handleSearch} className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for turf, accessories, and more..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-lg"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {initialQuery && (
          <p className="text-slate-500 mb-6">
            {results.length} result{results.length !== 1 ? "s" : ""} for{" "}
            <span className="font-medium text-slate-800">&quot;{initialQuery}&quot;</span>
          </p>
        )}

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : initialQuery ? (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-slate-200 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">No results found</h2>
            <p className="text-slate-500">
              Try a different search term or browse our{" "}
              <a href="/products" className="text-emerald-600 hover:underline">
                product catalogue
              </a>
            </p>
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-slate-200 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-800 mb-2">Start searching</h2>
            <p className="text-slate-500">Enter a keyword above to find products</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-slate-500">Loading search...</div>
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
