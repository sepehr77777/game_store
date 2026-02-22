import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const res = await fetch(
    `https://api.rawg.io/api/games/${id}?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Game not found" }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
