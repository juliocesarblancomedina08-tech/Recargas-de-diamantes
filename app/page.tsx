import Link from "next/link";

export default function Home() {
  return (
    <main className="legions-container">
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
        }}
      >
        <div>
          <p
            style={{
              color: "#e50914",
              fontWeight: "700",
              letterSpacing: "3px",
              marginBottom: "10px",
            }}
          >
            BIENVENIDO
          </p>

          <h1
            style={{
              fontSize: "clamp(40px, 12vw, 80px)",
              fontWeight: "900",
              letterSpacing: "-2px",
            }}
          >
            LEGIONS <span style={{ color: "#e50914" }}>VENTAS</span>
          </h1>

          <p
            style={{
              color: "#999",
              fontSize: "17px",
              marginTop: "15px",
            }}
          >
            Recargas de videojuegos y servicios digitales
          </p>
        </div>

        <Link href="/login" className="legions-button">
          Entrar a LEGIONS VENTAS
        </Link>
      </section>
    </main>
  );
}
