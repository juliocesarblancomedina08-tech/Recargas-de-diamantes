import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="welcome-box">
        <div className="welcome-content">
          <div className="welcome-logo">
            <span className="welcome-logo-line" />
            <span className="welcome-logo-text">LV</span>
          </div>

          <p className="welcome-label">BIENVENIDOS A</p>

          <h1>
            LEGIONS <span>VENTAS</span>
          </h1>

          <p className="welcome-description">
            Recargas de videojuegos y servicios digitales
          </p>

          <div className="welcome-decoration">
            <span />
            <span />
            <span />
          </div>

          <Link href="/login" className="welcome-button">
            ENTRAR A LEGIONS VENTAS <span>→</span>
          </Link>

          <p className="welcome-footer">
            TU MUNDO GAMING · TU MUNDO DIGITAL
          </p>
        </div>
      </section>
    </main>
  );
}
