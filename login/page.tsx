"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="login-page">
      <div className="login-box">
        <div className="logo">LV</div>

        <h1>LEGIONS <span>VENTAS</span></h1>

        <p className="subtitle">
          Inicia sesión para continuar
        </p>

        <button className="google-button">
          <span>G</span>
          Continuar con Google
        </button>

        <div className="separator">
          <span>o</span>
        </div>

        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="tu@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-button">
          INICIAR SESIÓN
        </button>

        <p className="register-text">
          ¿No tienes una cuenta? <span>Registrarse</span>
        </p>
      </div>
    </main>
  );
}
