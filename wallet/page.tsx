"use client";

export default function WalletPage() {
  return (
    <main className="wallet-page">
      <header className="wallet-header">
        <h1>💰 BILLETERA</h1>
        <p>Gestiona tu balance USDT</p>
      </header>

      <section className="wallet-balance">
        <p>Balance actual</p>
        <h2>0.00 USDT</h2>
        <span>Red BEP-20</span>
      </section>

      <section className="deposit-card">
        <h2>Insertar balance</h2>

        <p>
          Envía USDT mediante la red BEP-20 a la dirección indicada.
        </p>

        <div className="qr-container">
          <div className="qr-placeholder">
            QR
          </div>
        </div>

        <p className="wallet-label">
          Dirección USDT BEP-20
        </p>

        <div className="wallet-address">
          DIRECCIÓN PENDIENTE
        </div>

        <button className="copy-button">
          📋 COPIAR DIRECCIÓN
        </button>
      </section>
    </main>
  );
}
