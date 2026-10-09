"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState("");

  const options = [
    { icon: "▤", title: "Billetera", description: "Consulta tu saldo y depósitos" },
    { icon: "📊", title: "Estadísticas", description: "Revisa tu actividad" },
    { icon: "👤", title: "Mi perfil", description: "Información de tu cuenta" },
    { icon: "🎧", title: "Soporte", description: "Obtén ayuda" },
  ];

  return (
    <main className="settings-page">
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
          aria-label="Volver al panel"
        >
          ×
        </button>
      </header>

      <section className="settings-account">
        <div className="settings-avatar">@</div>
        <div>
          <span className="settings-account-label">TU CUENTA</span>
          <h2>@oliverramos094</h2>
        </div>
      </section>

      <p className="settings-section-title">AJUSTES</p>

      <section className="settings-options">
        {options.map((option) => (
          <button
            className="settings-option"
            type="button"
            key={option.title}
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
        <section className="settings-notice" role="status">
          <strong>{selected}</strong>
          <p>Esta sección estará disponible próximamente.</p>
          <button type="button" onClick={() => setSelected("")}>
            Volver
          </button>
        </section>
      )}

      <button
        className="settings-logout"
        type="button"
        onClick={() => router.push("/login")}
      >
        ↪ Cerrar sesión
      </button>
    </main>
  );
}
