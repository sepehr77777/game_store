// /app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/games");
  }, [router]);

  return <p style={{ padding: 40 }}>Redirecting to /games...</p>;
}
