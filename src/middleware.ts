import { NextResponse, type NextRequest } from "next/server";

// A failed/omitted texture leaves the accessible solid pine surface intact.
export function middleware(request: NextRequest) {
  if (request.headers.get("save-data") === "on") {
    return new NextResponse(null, { status: 204, headers: { Vary: "Save-Data" } });
  }
  const response = NextResponse.next();
  response.headers.set("Vary", "Save-Data");
  return response;
}

export const config = { matcher: "/assets/grain.svg" };
