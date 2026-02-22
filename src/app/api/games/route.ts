// /app/api/games/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";
  const ordering = searchParams.get("ordering") || "-rating";

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&search=${search}&ordering=${ordering}&page_size=12`
  );

  const data = await res.json();
  return NextResponse.json(data);
}
