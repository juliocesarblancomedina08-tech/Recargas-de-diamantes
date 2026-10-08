import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="welcome-box">
        <div className="welcome-content">
          <p className="welcome-label">BIENVENIDO</p>

          <h1>
            LEGIONS <span>VENTAS</span>
          </h1>

          <p className="welcome-description">
            Recargas de videojuegos y servicios digitales
          </p>

          <Link href="/login" className="welcome-button">
            ENTRAR A LEGIONS VENTAS
          </Link>
        </div>
      </section>
    </main>
  );
}
