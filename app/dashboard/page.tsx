
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
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
          <p>BIENVENIDO A</p>
          <h1>
            LEGIONS <span>VENTAS</span>
          </h1>
          <p>Hola, Oliver 👋</p>
        </div>

        <button
          className="settings-button"
          type="button"
          aria-label="Configuración"
          onClick={() => router.push("/settings")}
        >
          ⚙️
        </button>
      </header>

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
          <h2>MENÚ PRINCIPAL</h2>

          <button
            className="menu-card"
            type="button"
            onClick={() => setShowGames(true)}
          >
            <span>🎮 JUEGOS</span>
            <p>Ver todos los juegos disponibles</p>
          </button>

          <div className="dashboard-extra-menu">
            <button
              className="menu-card"
              type="button"
              onClick={() => router.push("/settings")}
            >
              👤 Mi cuenta
              <p>Gestiona tu cuenta y preferencias</p>
            </button>

            <button className="menu-card" type="button">
              ⭐ Star para Telegram
            </button>

            <button className="menu-card" type="button">
              🎁 Gift Cards
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
              <button
                className="menu-card"
                key={game.name}
                type="button"
              >
                {game.icon} {game.name}
              </button>
            ))}
          </div>
        </section>
      )}

      <footer className="dashboard-footer">
        <p>LEGIONS VENTAS</p>
        <small>Tu mundo de recargas digitales</small>
      </footer>
    </main>
  );
}
