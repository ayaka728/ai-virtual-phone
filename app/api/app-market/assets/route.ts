export const runtime = "edge";
import { NextResponse } from "next/server";
export async function GET() { return NextResponse.json({ ok: false, error: "disabled on static deploy" }, { status: 200 }); }
export async function POST() { return NextResponse.json({ ok: false, error: "disabled on static deploy" }, { status: 200 }); }
export async function PUT() { return NextResponse.json({ ok: false, error: "disabled on static deploy" }, { status: 200 }); }
export async function DELETE() { return NextResponse.json({ ok: false, error: "disabled on static deploy" }, { status: 200 }); }
