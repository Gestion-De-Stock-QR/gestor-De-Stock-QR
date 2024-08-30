import React from "react";
import { Navigate, useNavigate } from "react-router-dom";



export const Home = () => {
  const navigate = useNavigate();

  const handleAgregarProducto =()=>{
    navigate('/agregar-nuevo-producto');
  }


  return (
    <div>
      <button onClick={ handleAgregarProducto }> Agregar producto</button>

        <button>Actualizar stock</button>

    </div>
  );
};
