import { NextRequest, NextResponse } from "next/server";
import { products, searchProducts, getProductsByCategory } from "@/lib/products";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");
  const category = searchParams.get("category");

  let result = products;

  if (query) {
    result = searchProducts(query);
  } else if (category) {
    result = getProductsByCategory(category);
  }

  return NextResponse.json(result);
}
