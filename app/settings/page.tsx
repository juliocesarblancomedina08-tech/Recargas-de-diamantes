"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const options = [
  {
    icon: "▤",
    title: "Billetera",
    description: "Consulta tu saldo y depósitos",
  },
  {
    icon: "▥",
    title: "Estadísticas",
    description: "Revisa tu actividad",
  },
  {
    icon: "♙",
    title: "Mi perfil",
    description: "Información de tu cuenta",
  },
  {
    icon: "✧",
    title: "Soporte",
    description: "Estamos aquí para ayudarte",
  },
];

export default function SettingsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  return (
    <main className="settings-page">
      <div className="settings-glow settings-glow-left" />
      <div className="settings-glow settings-glow-right" />

      <header className="settings-menu-header">
        <div className="settings-brand">
          <span className="settings-brand-line" />
          <h1>
            LEGIONS
            <br />
            <span>VENTAS</span>
          </h1>
        </div>

        <button
          className="settings-close"
          type="button"
          onClick={() => router.push("/dashboard")}
          aria-label="Volver al inicio"
        >
          ×
        </button>
      </header>

      <section className="settings-account">
        <div className="settings-avatar">L</div>
        <div className="settings-account-info">
          <span className="settings-account-label">TU CUENTA</span>
          <h2>Mi cuenta</h2>
          <p>Bienvenido a LEGIONS VENTAS</p>
        </div>
        <span className="settings-status-dot" />
      </section>

      <div className="settings-section-heading">
        <span className="settings-heading-icon">✦</span>
        <h2>CENTRO DE CONTROL</h2>
      </div>

      <section className="settings-options">
        {options.map((option) => (
          <button
            className={`settings-option ${
              selected === option.title ? "settings-option-active" : ""
            }`}
            key={option.title}
            type="button"
            onClick={() => setSelected(option.title)}
          >
            <span className="settings-option-icon">{option.icon}</span>

            <span className="settings-option-text">
              <strong>{option.title}</strong>
              <small>{option.description}</small>
            </span>

            <span className="settings-arrow">›</span>
          </button>
        ))}
      </section>

      {selected && (
        <section className="settings-notice">
          <span className="settings-notice-icon">✧</span>
          <div>
            <strong>{selected}</strong>
            <p>
              Esta sección todavía no está conectada a sus funciones.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelected("")}
            aria-label="Cerrar aviso"
          >
            ×
          </button>
        </section>
      )}

      <button
        className="settings-logout"
        type="button"
        onClick={() => router.push("/login")}
      >
        <span>↪</span>
        CERRAR SESIÓN
      </button>

      <footer className="settings-footer">
        <span className="settings-footer-line" />
        <p>LEGIONS VENTAS</p>
        <small>TU MUNDO DE RECARGAS DIGITALES</small>
      </footer>
    </main>
  );
}
