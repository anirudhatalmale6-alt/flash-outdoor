"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package,
  ShoppingCart,
  Star,
  MessageSquare,
  TrendingUp,
  Users,
  DollarSign,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    label: "Total Products",
    value: "8",
    icon: Package,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    label: "Orders",
    value: "0",
    icon: ShoppingCart,
    color: "bg-blue-100 text-blue-600",
  },
  {
    label: "Reviews",
    value: "0",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Quote Requests",
    value: "0",
    icon: MessageSquare,
    color: "bg-purple-100 text-purple-600",
  },
  {
    label: "Revenue",
    value: "$0.00",
    icon: DollarSign,
    color: "bg-green-100 text-green-600",
  },
  {
    label: "Customers",
    value: "0",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
  },
];

const quickLinks = [
  { label: "View Store", href: "/", icon: TrendingUp },
  { label: "Products", href: "/products", icon: Package },
  { label: "Quote Requests", href: "/admin/quotes", icon: MessageSquare },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-slate-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Flash Outdoor — Admin Dashboard</h1>
          <p className="text-slate-400 mt-1">Manage your store, orders, and customers</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <link.icon className="w-5 h-5 text-emerald-600" />
                <span className="font-medium text-slate-800">{link.label}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex gap-4 border-b border-gray-100 mb-6">
            {["overview", "orders", "reviews", "quotes"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-1 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "overview" && (
            <div className="text-center py-12">
              <TrendingUp className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">
                Welcome to your dashboard
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                Your store is set up and ready to go. As orders come in, you will see
                analytics and activity here.
              </p>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="text-center py-12">
              <ShoppingCart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No orders yet</h3>
              <p className="text-slate-500">Orders will appear here once customers start purchasing.</p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-center py-12">
              <Star className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No reviews yet</h3>
              <p className="text-slate-500">Customer reviews will appear here for moderation.</p>
            </div>
          )}

          {activeTab === "quotes" && (
            <div className="text-center py-12">
              <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-800 mb-2">No quote requests yet</h3>
              <p className="text-slate-500">Quote requests from customers will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
