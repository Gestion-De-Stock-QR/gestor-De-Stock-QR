import React, { useEffect } from "react";
import StockControl from "../StockControl";

const ManejoStock = ({ saborSeleccionado, accion, setAccion, cantidad, setCantidad, handleActualizarStock }) => {

  return (
    <div className="scaner-container"> 
      <h2>Resultado del Escaneo:</h2>
      <div className="resultado">
        <p>Producto: {saborSeleccionado.nombre}</p>
      </div>
      <div className="resultado">
        <p>Stock: {saborSeleccionado.stock}</p>
      </div>
      <div className="resultado">
        <p>Umbral: {saborSeleccionado.umbral}</p>
      </div>
      
      <StockControl
        accion={accion}
        setAccion={setAccion}
        cantidad={cantidad}
        setCantidad={setCantidad}
        handleActualizarStock={handleActualizarStock}
      />
    </div>
  );
};

export default ManejoStock;
