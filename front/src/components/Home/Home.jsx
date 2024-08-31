import React from "react";
import { Navigate, useNavigate } from "react-router-dom";



export const Home = () => {
  const navigate = useNavigate();

  const handleAgregarProducto =()=>{
    navigate('/agregar-nuevo-producto');
  }

  const handleConsultarStock=()=>{
    navigate('/consultar-stock')
  }


  return (
    <div>
      <button onClick={ handleAgregarProducto }> Agregar producto</button>

      <button onClick={ handleConsultarStock }> Consultar stock </button>

        <button>Actualizar stock</button>

    </div>
  );
};
