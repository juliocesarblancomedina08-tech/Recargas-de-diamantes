"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="register-page">
      <div className="register-box">
        <div className="logo">LV</div>

        <h1>
          CREAR <span>CUENTA</span>
        </h1>

        <p className="subtitle">
          Únete a LEGIONS VENTAS
        </p>

        <button className="google-button">
          <span>G</span>
          Registrarse con Google
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

        <label>Confirmar contraseña</label>

        <input
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="login-button">
          CREAR CUENTA
        </button>

        <p className="register-text">
          ¿Ya tienes una cuenta? <span>Iniciar sesión</span>
        </p>
      </div>
    </main>
  );
}
