export const runtime = "edge";

export async function GET() {
  return new Response(JSON.stringify({ok: false, error: "disabled on static deploy"}), {
    status: 200,
    headers: {"content-type": "application/json", "Cache-Control": "no-store"},
  });
}

export async function POST() {
  return new Response(JSON.stringify({ok: false, error: "disabled on static deploy"}), {
    status: 200,
    headers: {"content-type": "application/json", "Cache-Control": "no-store"},
  });
}

export async function PUT() {
  return new Response(JSON.stringify({ok: false, error: "disabled on static deploy"}), {
    status: 200,
    headers: {"content-type": "application/json", "Cache-Control": "no-store"},
  });
}

export async function PATCH() {
  return new Response(JSON.stringify({ok: false, error: "disabled on static deploy"}), {
    status: 200,
    headers: {"content-type": "application/json", "Cache-Control": "no-store"},
  });
}

export async function DELETE() {
  return new Response(JSON.stringify({ok: false, error: "disabled on static deploy"}), {
    status: 200,
    headers: {"content-type": "application/json", "Cache-Control": "no-store"},
  });
}
