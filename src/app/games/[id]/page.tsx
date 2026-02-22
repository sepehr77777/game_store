"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type GameDetail = {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  released: string;
  rating: number;
  platforms: { platform: { name: string } }[];
  genres: { name: string }[];
};

export default function GameDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [game, setGame] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchGame = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/games/${params.id}`
      );
      const data = await res.json();
      setGame(data);
    } catch (err) {
      console.error(err);
      setGame(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGame();
  }, [params.id]);

  if (loading) return <p style={{ padding: 40 }}>Loading...</p>;
  if (!game) return <p style={{ padding: 40 }}>Game not found</p>;

  return (
    <div style={{ padding: 40 }}>
      <button onClick={() => router.back()} style={{ marginBottom: 20 }}>
        &larr; Back
      </button>

      <h1>{game.name}</h1>
      {game.background_image && (
        <img src={game.background_image} alt={game.name} style={{ width: "100%", maxHeight: 400, objectFit: "cover" }} />
      )}

      <p><strong>Released:</strong> {game.released}</p>
      <p><strong>Rating:</strong> {game.rating}</p>
      <p><strong>Platforms:</strong> {game.platforms.map(p => p.platform.name).join(", ")}</p>
      <p><strong>Genres:</strong> {game.genres.map(g => g.name).join(", ")}</p>
      <p style={{ marginTop: 20 }}>{game.description_raw}</p>
    </div>
  );
}
