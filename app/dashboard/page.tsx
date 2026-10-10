"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [showGames, setShowGames] = useState(false);

  const games = [
    {
      name: "Mobile Legends Global",
      image: "/images/games/mobile-legends-global.jpg",
    },
    {
      name: "Mobile Legends EE. UU.",
      image: "/images/games/mobile-legends-us.jpg",
    },
    {
      name: "Free Fire",
      image: "/images/games/free-fire.jpg",
    },
    {
      name: "Roblox",
      image: "/images/games/roblox.jpg",
    },
    {
      name: "Honor of Kings",
      image: "/images/games/honor-of-kings.jpg",
    },
    {
      name: "Delta Force Mobile",
      image: "/images/games/delta-force.jpg",
    },
    {
      name: "PUBG Mobile",
      image: "/images/games/pubg-mobile.jpg",
    },
    {
      name: "Blood Strike",
      image: "/images/games/blood-strike.jpg",
    },
    {
      name: "FC Mobile",
      image: "/images/games/fc-mobile.jpg",
    },
    {
      name: "Call of Duty Mobile",
      image: "/images/games/call-of-duty-mobile.jpg",
    },
    {
      name: "Sausage Man",
      image: "/images/games/sausage-man.jpg",
    },
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
                className="menu-card game-cover-card"
                key={game.name}
                type="button"
                onClick={() => {
                  alert(
                    `${game.name}: próximamente podrás seleccionar tus recargas.`
                  );
                }}
              >
                <img
                  className="game-cover-image"
                  src={game.image}
                  alt={`Portada de ${game.name}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <span className="game-cover-name">{game.name}</span>
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
