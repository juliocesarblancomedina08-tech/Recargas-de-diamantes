export default function DashboardPage() {
return (
<main className="dashboard-page">
<div className="dashboard-header">
<div>
<p>Bienvenido a LEGIONS VENTAS</p>
<h1>Hola, Oliver 👋</h1>
</div>
</div>

  <h2 style={{ color: "white", marginTop: "30px" }}>
    🎮 JUEGOS — PRUEBA DEFINITIVA
  </h2>

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
      <div className="menu-card">🎮 Mobile Legends</div>
      <div className="menu-card">🔥 Free Fire</div>
      <div className="menu-card">🧱 Roblox</div>
      <div className="menu-card">👑 Honor of Kings</div>
      <div className="menu-card">⚔️ Delta Force</div>
      <div className="menu-card">🔫 PUBG Mobile</div>
      <div className="menu-card">💥 Blood Strike</div>
      <div className="menu-card">⚽ FC Mobile</div>
      <div className="menu-card">🎯 Call of Duty Mobile</div>
      <div className="menu-card">🍖 Sausage Man</div>
    </div>
  </section>
</main>

);
}
