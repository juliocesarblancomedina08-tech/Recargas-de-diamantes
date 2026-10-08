export default function DashboardPage() {
  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <p>Bienvenido a LEGIONS VENTAS</p>
          <h1>Hola, Oliver 👋</h1>
        </div>
      </div>

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
    </main>
          <section className="dashboard-menu">
        <div className="menu-card">
          <span>🎮</span>
          <h2>JUEGOS</h2>
          <p>Recargas de videojuegos</p>
        </div>
      </section>
  );
}
