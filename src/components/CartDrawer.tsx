"use client";

import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, Leaf } from "lucide-react";
import { useCartStore } from "@/store/cart";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <ShoppingBag
          size={56}
          className="mx-auto text-slate-300 mb-4"
          strokeWidth={1.5}
        />
        <h3 className="text-lg font-semibold text-slate-700 mb-2">
          Your cart is empty
        </h3>
        <p className="text-sm text-slate-500 mb-6">
          Browse our range of premium synthetic turf and accessories.
        </p>
        <Link
          href="/products"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Items */}
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <div key={item.product.id} className="flex gap-4 py-5">
            {/* Product thumbnail placeholder */}
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shrink-0">
              <Leaf size={24} className="text-emerald-300/50" />
            </div>

            <div className="flex-1 min-w-0">
              <Link
                href={`/products/${item.product.slug}`}
                className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors line-clamp-1"
              >
                {item.product.name}
              </Link>
              <p className="text-xs text-slate-500 mt-0.5">
                ${item.product.price.toFixed(2)} {item.product.unit}
              </p>

              <div className="flex items-center justify-between mt-3">
                {/* Quantity controls */}
                <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity - 1)
                    }
                    className="px-2.5 py-1.5 text-slate-600 hover:bg-gray-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 py-1.5 text-sm font-medium text-slate-800 min-w-[2.5rem] text-center bg-gray-50">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product.id, item.quantity + 1)
                    }
                    className="px-2.5 py-1.5 text-slate-600 hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-slate-800">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border-t border-gray-200 pt-5 mt-2 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold text-slate-800">
            Subtotal
          </span>
          <span className="text-xl font-bold text-slate-900">
            ${totalPrice().toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-slate-500">
          Shipping calculated at checkout. Free shipping on orders over $500.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/checkout"
            className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-colors shadow-sm hover:shadow"
          >
            Proceed to Checkout
          </Link>
          <Link
            href="/products"
            className="block text-center border border-gray-200 text-slate-700 hover:bg-gray-50 font-medium text-sm px-6 py-3 rounded-xl transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
