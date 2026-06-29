import { products } from "@/lib/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }));
}

export default function ProductDetailPage() {
  return <ProductDetail />;
}
