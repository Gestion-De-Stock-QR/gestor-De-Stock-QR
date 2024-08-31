import React from "react";
import { useNavigate } from "react-router-dom";



export const Home = () => {
  const navigate = useNavigate();

  const handleAgregarProducto =()=>{
    navigate('/agregar-nuevo-producto');
  }

  const handleConsultarStock=()=>{
    navigate('/consultar-stock')
  }

  const handleActualizarStock=()=>{
    navigate('/actualizar-stock')
  }

  const handleVerProductos=()=>{
   navigate('/mis-productos')
  }

  return (
    <div>
      <h1>Costa Nevada</h1>

      <button onClick={ handleAgregarProducto }>Agregar producto</button>

      <button onClick={ handleConsultarStock }>Consultar stock</button>

      <button onClick={ handleActualizarStock }>Actualizar stock</button>

      <button onClick={ handleVerProductos }>Mis productos</button>

    </div>
  );
};
