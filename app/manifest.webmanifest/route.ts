export const runtime = "edge";

import { NextResponse } from "next/server";
import baseManifest from "../../public/manifest.json";

export function GET() {
  return NextResponse.json(baseManifest, {
    headers: { "content-type": "application/manifest+json", "Cache-Control": "no-store" },
  });
}
