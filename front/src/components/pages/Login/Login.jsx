import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleInicioSesion = () => {
    navigate("/home");
  };

  return (
    <div>
      <input type="text" placeholder="Usuario" />
      <input type="text" placeholder="Contraseña" />
      <button onClick={handleInicioSesion}> Iniciar sesion </button>
    </div>
  );
};
