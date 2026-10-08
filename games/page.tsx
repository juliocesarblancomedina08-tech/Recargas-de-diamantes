"use client";

const games = [
  "Mobile Legends",
  "Free Fire",
  "Roblox",
  "Blood Strike",
  "PUBG Mobile",
  "Delta Force",
  "Honor of Kings",
  "FC Mobile",
  "Call of Duty Mobile",
  "Sausage Man",
];

export default function GamesPage() {
  return (
    <main className="games-page">
      <header className="games-header">
        <h1>🎮 JUEGOS</h1>
        <p>Selecciona un juego para realizar una recarga</p>
      </header>

      <section className="games-grid">
        {games.map((game) => (
          <button className="game-card" key={game}>
            <div className="game-icon">🎮</div>
            <span>{game}</span>
          </button>
        ))}
      </section>
    </main>
  );
}
