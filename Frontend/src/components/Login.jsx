import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Login.css'; // Importando el archivo CSS

export function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3030/login', {
        email: email,
        password: password
      });

      // Guardar token de sesión o cualquier información relevante en el localStorage
      localStorage.setItem('token', response.data.token); // Guardar el token en localStorage
      onLogin(response.data); // Puedes pasar la información del usuario al estado superior
      navigate("/home");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
