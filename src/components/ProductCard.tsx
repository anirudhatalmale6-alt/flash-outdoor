"use client";

import Link from "next/link";
import { ShoppingCart, Star, Leaf } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/store/cart";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  function handleAdd() {
    addItem(product, 1);
    toast.success(`${product.name} added to cart`);
  }

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Image placeholder */}
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
          <Leaf
            size={56}
            className="text-emerald-300/40 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            {product.badge}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider mb-1">
          {product.category}
        </span>

        {/* Name */}
        <Link
          href={`/products/${product.slug}`}
          className="text-lg font-semibold text-slate-800 hover:text-emerald-700 transition-colors leading-snug mb-2"
        >
          {product.name}
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.round(product.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-200 fill-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">
            ({product.reviewCount})
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Price + actions */}
        <div className="flex items-end justify-between gap-3 mt-2">
          <div>
            <span className="text-2xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="block text-xs text-slate-500">{product.unit}</span>
          </div>
          <button
            onClick={handleAdd}
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm hover:shadow"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
