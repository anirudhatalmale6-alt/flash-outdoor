export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number;
  unit: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  images: string[];
  inStock: boolean;
  rating: number;
  reviewCount: number;
  badge?: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    name: "Synthetic Turf",
    slug: "synthetic-turf",
    description: "Premium Australian-quality artificial grass for every application",
    image: "/images/categories/turf.jpg",
    productCount: 4,
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Everything you need for a professional turf installation",
    image: "/images/categories/accessories.jpg",
    productCount: 4,
  },
];

export const products: Product[] = [
  {
    id: "turf-premium-40",
    name: "Premium Landscape 40mm",
    slug: "premium-landscape-40mm",
    category: "Synthetic Turf",
    categorySlug: "synthetic-turf",
    price: 34.95,
    unit: "per m²",
    description:
      "Our flagship synthetic turf featuring ultra-realistic blade technology with a natural four-tone colour blend. Perfect for front yards, backyards, and entertaining areas. UV-stabilised for long-lasting colour retention with superior drainage capabilities.",
    features: [
      "40mm pile height for a lush, natural feel",
      "Four-tone colour blend mimics real grass",
      "UV-stabilised — won't fade in harsh sun",
      "Superior drainage — 60L per m² per minute",
      "Soft underfoot — safe for kids and pets",
      "15-year manufacturer warranty",
    ],
    specs: {
      "Pile Height": "40mm",
      "Yarn Type": "PE Monofilament + PP Curled",
      Dtex: "13,200",
      "Stitch Rate": "18 stitches per 10cm",
      "Backing": "Dual layer polyurethane",
      "Roll Width": "2m or 4m",
      Drainage: "60L/m²/min",
      "UV Rating": "5000+ hours",
      Warranty: "15 years",
    },
    images: [
      "/images/products/turf-premium-40-1.jpg",
      "/images/products/turf-premium-40-2.jpg",
    ],
    inStock: true,
    rating: 4.8,
    reviewCount: 124,
    badge: "Best Seller",
  },
  {
    id: "turf-natural-35",
    name: "Natural Classic 35mm",
    slug: "natural-classic-35mm",
    category: "Synthetic Turf",
    categorySlug: "synthetic-turf",
    price: 29.95,
    unit: "per m²",
    description:
      "A versatile all-rounder with a natural appearance and durable construction. Ideal for residential lawns, play areas, and light commercial use. The 35mm pile height offers the perfect balance between aesthetics and practicality.",
    features: [
      "35mm pile height — neat and versatile",
      "Tri-tone colour for a realistic look",
      "High-density stitch rate for durability",
      "Pet-friendly with antimicrobial backing",
      "Easy to clean and maintain",
      "10-year manufacturer warranty",
    ],
    specs: {
      "Pile Height": "35mm",
      "Yarn Type": "PE Monofilament",
      Dtex: "11,000",
      "Stitch Rate": "16 stitches per 10cm",
      Backing: "Single layer polyurethane",
      "Roll Width": "2m or 4m",
      Drainage: "50L/m²/min",
      "UV Rating": "4000+ hours",
      Warranty: "10 years",
    },
    images: [
      "/images/products/turf-natural-35-1.jpg",
      "/images/products/turf-natural-35-2.jpg",
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: "turf-pet-friendly-30",
    name: "Pet Friendly 30mm",
    slug: "pet-friendly-30mm",
    category: "Synthetic Turf",
    categorySlug: "synthetic-turf",
    price: 32.5,
    unit: "per m²",
    description:
      "Engineered specifically for pet owners. Features antimicrobial treatment and enhanced drainage to handle pet use with ease. The shorter pile height makes cleaning a breeze while still looking fantastic.",
    features: [
      "30mm pile — easy to clean",
      "Antimicrobial yarn treatment",
      "Enhanced drainage for pet areas",
      "Odour-resistant backing technology",
      "Non-toxic and safe for all pets",
      "10-year manufacturer warranty",
    ],
    specs: {
      "Pile Height": "30mm",
      "Yarn Type": "PE Monofilament (antimicrobial)",
      Dtex: "12,000",
      "Stitch Rate": "20 stitches per 10cm",
      Backing: "Antimicrobial polyurethane",
      "Roll Width": "2m or 4m",
      Drainage: "80L/m²/min",
      "UV Rating": "4500+ hours",
      Warranty: "10 years",
    },
    images: [
      "/images/products/turf-pet-30-1.jpg",
      "/images/products/turf-pet-30-2.jpg",
    ],
    inStock: true,
    rating: 4.7,
    reviewCount: 67,
    badge: "Pet Owners Love It",
  },
  {
    id: "turf-cool-25",
    name: "CoolTouch Sport 25mm",
    slug: "cooltouch-sport-25mm",
    category: "Synthetic Turf",
    categorySlug: "synthetic-turf",
    price: 38.0,
    unit: "per m²",
    description:
      "Advanced cooling technology keeps this turf up to 30% cooler than standard synthetic grass. Perfect for play areas, sports practice, and anywhere bare feet meet turf on hot days.",
    features: [
      "25mm pile — firm and sporty",
      "CoolTouch yarn — up to 30% cooler surface",
      "High-density for heavy foot traffic",
      "Ideal for sport and play areas",
      "Superior wear resistance",
      "15-year manufacturer warranty",
    ],
    specs: {
      "Pile Height": "25mm",
      "Yarn Type": "PE CoolTouch Monofilament",
      Dtex: "14,000",
      "Stitch Rate": "22 stitches per 10cm",
      Backing: "Heavy-duty polyurethane",
      "Roll Width": "4m",
      Drainage: "70L/m²/min",
      "UV Rating": "6000+ hours",
      Warranty: "15 years",
    },
    images: [
      "/images/products/turf-cool-25-1.jpg",
      "/images/products/turf-cool-25-2.jpg",
    ],
    inStock: true,
    rating: 4.9,
    reviewCount: 42,
    badge: "Cooling Tech",
  },
  {
    id: "turf-nails",
    name: "Turf Nails — 150mm Hardened Steel",
    slug: "turf-nails-150mm",
    category: "Accessories",
    categorySlug: "accessories",
    price: 24.95,
    unit: "per pack (100pc)",
    description:
      "Heavy-duty 150mm hardened steel nails for securing synthetic turf edges and seams. Galvanised for rust resistance. Essential for a professional, long-lasting installation.",
    features: [
      "150mm length — holds through turf and base",
      "Hardened steel for tough ground",
      "Galvanised for corrosion resistance",
      "100 nails per pack",
      "Flat head sits flush with turf surface",
    ],
    specs: {
      Length: "150mm",
      Material: "Hardened galvanised steel",
      "Head Type": "Flat",
      "Pack Qty": "100",
      "Suitable For": "All turf types",
    },
    images: ["/images/products/turf-nails-1.jpg"],
    inStock: true,
    rating: 4.5,
    reviewCount: 31,
  },
  {
    id: "u-pins",
    name: "U-Pins — Galvanised Turf Staples",
    slug: "u-pins-galvanised",
    category: "Accessories",
    categorySlug: "accessories",
    price: 19.95,
    unit: "per pack (100pc)",
    description:
      "Professional-grade galvanised U-shaped pins for pinning down turf edges, seams, and weed mat. The U-shape provides superior holding power compared to standard nails.",
    features: [
      "U-shaped for superior grip",
      "150mm prong length",
      "Galvanised — rust proof",
      "100 staples per pack",
      "Easy to install with a rubber mallet",
    ],
    specs: {
      "Prong Length": "150mm",
      Width: "25mm",
      Material: "Galvanised steel",
      "Pack Qty": "100",
      "Suitable For": "Turf, weed mat, garden edging",
    },
    images: ["/images/products/u-pins-1.jpg"],
    inStock: true,
    rating: 4.4,
    reviewCount: 22,
  },
  {
    id: "joining-tape",
    name: "Self-Adhesive Joining Tape — 10m Roll",
    slug: "joining-tape-10m",
    category: "Accessories",
    categorySlug: "accessories",
    price: 29.95,
    unit: "per roll",
    description:
      "Professional self-adhesive joining tape for seamless synthetic turf connections. Creates invisible joins between turf rolls for a flawless finish. Weather-resistant adhesive stays bonded year after year.",
    features: [
      "Self-adhesive — no glue required",
      "10m per roll",
      "Creates invisible seams",
      "Weather-resistant bonding",
      "Works with all turf types",
    ],
    specs: {
      Length: "10m",
      Width: "300mm",
      Type: "Self-adhesive",
      Colour: "Green",
      "Suitable For": "All synthetic turf",
    },
    images: ["/images/products/joining-tape-1.jpg"],
    inStock: true,
    rating: 4.6,
    reviewCount: 18,
  },
  {
    id: "silica-sand",
    name: "Kiln-Dried Silica Sand — 20kg Bag",
    slug: "silica-sand-20kg",
    category: "Accessories",
    categorySlug: "accessories",
    price: 14.95,
    unit: "per bag",
    description:
      "Premium kiln-dried silica sand infill for synthetic turf. Weighs down turf fibres, supports blade recovery, and improves drainage. Recommended application rate: 4-6kg per square metre.",
    features: [
      "Kiln-dried for consistent quality",
      "Fine grain — flows between turf fibres",
      "Supports blade memory and recovery",
      "Improves turf stability",
      "20kg bag covers approx. 3-5m²",
    ],
    specs: {
      Weight: "20kg",
      "Grain Size": "0.3-0.8mm",
      Type: "Kiln-dried silica",
      "Application Rate": "4-6kg per m²",
      Coverage: "3-5m² per bag",
    },
    images: ["/images/products/silica-sand-1.jpg"],
    inStock: true,
    rating: 4.3,
    reviewCount: 15,
  },
];

export function getProduct(idOrSlug: string): Product | undefined {
  return products.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
  );
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge || p.rating >= 4.7);
}
