import Link from "next/link";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#contact" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Synthetic Turf", href: "/products?category=synthetic-turf" },
      { label: "Accessories", href: "/products?category=accessories" },
      { label: "All Products", href: "/products" },
    ],
  },
  {
    title: "Customer Care",
    links: [
      { label: "Shipping & Delivery", href: "#" },
      { label: "Returns Policy", href: "#" },
      { label: "Warranty Information", href: "#" },
      { label: "Installation Guide", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white font-black text-base leading-none">
                F
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                Flash<span className="text-emerald-400">Outdoor</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-5">
              Premium synthetic turf and outdoor solutions. Quality you can see,
              durability you can trust.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:bg-emerald-600 hover:text-white transition-colors text-xs font-bold"
                  aria-label={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>&copy; 2026 Flash Outdoor. All rights reserved.</span>
          <span>We accept Visa, Mastercard, PayPal &amp; more</span>
        </div>
      </div>
    </footer>
  );
}
