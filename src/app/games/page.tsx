// /app/games/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Game = {
  id: number;
  name: string;
  background_image: string;
};

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");
  const [ordering, setOrdering] = useState("-rating");
  const [loading, setLoading] = useState(false);

  const fetchGames = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/games?search=${search}&ordering=${ordering}`);
      const data = await res.json();
      setGames(data.results || []);
    } catch (err) {
      console.error(err);
      setGames([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, [search, ordering]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Games</h1>

      {/* Search & Filter */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: 8, marginRight: 10 }}
        />

        <select value={ordering} onChange={(e) => setOrdering(e.target.value)} style={{ padding: 8 }}>
          <option value="-rating">Top Rated</option>
          <option value="rating">Lowest Rated</option>
          <option value="-released">Newest</option>
          <option value="released">Oldest</option>
        </select>
      </div>

      {/* Games Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {games.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <div style={{ border: "1px solid #ddd", padding: 10, cursor: "pointer" }}>
                {game.background_image && (
                  <img src={game.background_image} alt={game.name} style={{ width: "100%" }} />
                )}
                <h3>{game.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
