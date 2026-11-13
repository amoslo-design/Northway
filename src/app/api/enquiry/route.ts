import { NextResponse } from "next/server";
import { getContent } from "@/lib/content";

export async function POST(request: Request) {
  let data;
  try { data = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (!data || typeof data !== "object") return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  if (data.website) return NextResponse.json({ ok: true });
  const { services } = await getContent();
  const { name, email, service, message } = data;
  if (typeof name !== "string" || name.trim().length < 2 || name.length > 80 || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || typeof service !== "string" || !["not-sure", ...services.map(item => item.slug)].includes(service) || typeof message !== "string" || message.length > 1000) return NextResponse.json({ error: "Check the highlighted fields and try again." }, { status: 400 });
  if (process.env.NODE_ENV === "development") return NextResponse.json({ ok: true, demo: true });
  if (!process.env.FORM_ENDPOINT) return NextResponse.json({ error: "Delivery is not configured." }, { status: 503 });
  try {
    const result = await fetch(process.env.FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: name.trim(), email: email.trim(), service, message }), signal: AbortSignal.timeout(10000) });
    if (!result.ok) throw new Error("Delivery failed");
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Delivery could not be confirmed." }, { status: 502 }); }
}
