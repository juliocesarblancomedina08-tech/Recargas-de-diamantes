export default function DashboardPage() {
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

  <section className="dashboard-menu">
    <h2>🎮 JUEGOS</h2>

    <div className="menu-grid">
      {games.map((game) => (
        <button
          className="menu-card"
          key={game.name}
          type="button"
        >
          <span>{game.icon}</span>
          <span>{game.name}</span>
        </button>
      ))}
    </div>

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
</main>

);
}
