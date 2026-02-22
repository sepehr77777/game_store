import Link from "next/link";

export default function GameCard({ game }: any) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <Link href={`/games/${game.id}`}>
        <h3>{game.name}</h3>
      </Link>
      <img src={game.background_image} width="300" />
      <p>⭐ {game.rating}</p>
    </div>
  );
}
