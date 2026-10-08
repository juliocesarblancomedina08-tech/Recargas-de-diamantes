"use client";

import { useState } from "react";

export default function DashboardPage() {
const [showGames, setShowGames] = useState(false);

const games = [
{ icon: "🎮", name: "Mobile Legends" },
{ icon: "🔥", name: "Free Fire" },
{ icon: "🧱", name: "Roblox" },
{ icon: "👑", name: "Honor of Kings" },
{ icon: "⚔️", name: "Delta Force" },
{ icon: "🔫", name: "PUBG Mobile" },
{ icon: "💥", name: "Blood Strike" },
{ icon: "⚽", name: "FC Mobile" },
{ icon: "🎯", name: "Call of Duty Mobile" },
{ icon: "🍖", name: "Sausage Man" },
];

return (
<main className="dashboard-page">
<header className="dashboard-header">
<div>
<p>Bienvenido a LEGIONS VENTAS</p>
<h1>Hola, Oliver 👋</h1>
</div>
</header>
<button className="settings-button" type="button" aria-label="Configuración">⚙️</button>
  <section className="dashboard-stats">
    <div className="stat-card">
      <span>💰</span>
      <p>BALANCE</p>
      <h2>0.00 USDT</h2>
    </div>

    <div className="stat-card">
      <span>💸</span>
      <p>GASTOS</p>
      <h2>0.00 USDT</h2>
    </div>

    <div className="stat-card">
      <span>📦</span>
      <p>PEDIDOS</p>
      <h2>0</h2>
    </div>
  </section>

  {!showGames ? (
    <section className="dashboard-menu">
      <button
        className="menu-card"
        type="button"
        onClick={() => setShowGames(true)}
      >
        🎮 JUEGOS
        <p>Ver todos los juegos disponibles</p>
      </button>

      <div className="menu-grid dashboard-extra-menu">
        <button className="menu-card" type="button">
          ⭐ Star para Telegram
        </button>
        <button className="menu-card" type="button">
          🎁 Gift Cards
        </button>
        <button className="menu-card" type="button">
          ⚙️ Configuración
        </button>
      </div>
    </section>
  ) : (
    <section className="dashboard-menu">
      <button
        className="menu-card"
        type="button"
        onClick={() => setShowGames(false)}
      >
        ⬅️ VOLVER AL INICIO
      </button>

      <h2>🎮 TODOS LOS JUEGOS</h2>

      <div className="menu-grid">
        {games.map((game) => (
          <button className="menu-card" key={game.name} type="button">
            {game.icon} {game.name}
          </button>
        ))}
      </div>
    </section>
  )}
</main>

);
}
