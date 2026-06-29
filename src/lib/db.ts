import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readJson<T>(filename: string, fallback: T): T {
  ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) return fallback;
  return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

function writeJson<T>(filename: string, data: T) {
  ensureDataDir();
  const filepath = path.join(DATA_DIR, filename);
  fs.writeFileSync(filepath, JSON.stringify(data, null, 2));
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  areaSize: string;
  message: string;
  status: string;
  createdAt: string;
}

export interface ReviewEntry {
  id: string;
  productId: string;
  name: string;
  rating: number;
  comment: string;
  verified: boolean;
  approved: boolean;
  createdAt: string;
}

export function getQuotes(): QuoteRequest[] {
  return readJson<QuoteRequest[]>("quotes.json", []);
}

export function addQuote(quote: Omit<QuoteRequest, "id" | "status" | "createdAt">): QuoteRequest {
  const quotes = getQuotes();
  const newQuote: QuoteRequest = {
    ...quote,
    id: `q_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  quotes.push(newQuote);
  writeJson("quotes.json", quotes);
  return newQuote;
}

export function getReviews(productId?: string): ReviewEntry[] {
  const reviews = readJson<ReviewEntry[]>("reviews.json", []);
  if (productId) {
    return reviews.filter((r) => r.productId === productId && r.approved);
  }
  return reviews;
}

export function addReview(review: Omit<ReviewEntry, "id" | "verified" | "approved" | "createdAt">): ReviewEntry {
  const reviews = readJson<ReviewEntry[]>("reviews.json", []);
  const newReview: ReviewEntry = {
    ...review,
    id: `r_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    verified: false,
    approved: false,
    createdAt: new Date().toISOString(),
  };
  reviews.push(newReview);
  writeJson("reviews.json", reviews);
  return newReview;
}
