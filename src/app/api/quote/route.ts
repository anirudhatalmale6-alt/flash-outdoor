import { NextRequest, NextResponse } from "next/server";
import { addQuote } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, areaSize, message } = body;

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Name, email, project type, and message are required" },
        { status: 400 }
      );
    }

    const quote = addQuote({
      name,
      email,
      phone: phone || "",
      projectType,
      areaSize: areaSize || "",
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Quote request received! We will get back to you within 24 hours.",
      id: quote.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to submit quote request" },
      { status: 500 }
    );
  }
}
