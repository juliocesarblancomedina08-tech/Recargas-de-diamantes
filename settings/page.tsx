"use client";

export default function SettingsPage() {
  return (
    <main className="settings-page">
      <header className="settings-header">
        <h1>⚙️ AJUSTES</h1>
        <p>Configura tu cuenta de LEGIONS VENTAS</p>
      </header>

      <section className="settings-card">
        <div className="setting-item">
          <div>
            <h2>👤 Cuenta</h2>
            <p>Gestiona tu información personal</p>
          </div>

          <span>›</span>
        </div>

        <div className="setting-item">
          <div>
            <h2>🔔 Notificaciones</h2>
            <p>Configura tus notificaciones</p>
          </div>

          <span>›</span>
        </div>

        <div className="setting-item">
          <div>
            <h2>🌐 Idioma</h2>
            <p>Español</p>
          </div>

          <span>›</span>
        </div>

        <div className="setting-item">
          <div>
            <h2>🔒 Seguridad</h2>
            <p>Protege tu cuenta</p>
          </div>

          <span>›</span>
        </div>
      </section>

      <button className="logout-button">
        CERRAR SESIÓN
      </button>
    </main>
  );
}
