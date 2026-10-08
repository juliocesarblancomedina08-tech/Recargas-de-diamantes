"use client";

export default function DashboardPage() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1>LEGIONS <span>VENTAS</span></h1>
          <p>Panel de usuario</p>
        </div>

        <button className="settings-button">
          ⚙️
        </button>
      </header>

      <section className="balance-card">
        <p>Balance disponible</p>

        <h2>0.00 USDT</h2>

        <span>Red: BEP-20</span>

        <button className="wallet-button">
          💰 BILLETERA
        </button>
      </section>

      <section className="services">
        <h2>Servicios</h2>

        <div className="services-grid">
          <button>🎮<span>Juegos</span></button>
          <button>💎<span>Diamantes</span></button>
          <button>🎁<span>Pases</span></button>
          <button>⚡<span>Ofertas</span></button>
        </div>
      </section>
    </main>
  );
}
