import React from "react";
import "../../../styles/stockControl.css";
const StockControl = ({
  accion,
  setAccion,
  cantidad,
  setCantidad,
  handleActualizarStock,
}) => {
  return (
    <div className="containerGeneral-stock">
      <div className="container-control-stock">
        <label>
          <input className="ingresar"
            type="radio"
            name="accion"
            value="ingresar"
            checked={accion === "ingresar"}
            onChange={() => setAccion("ingresar")}
          />
          Ingresar
        </label>
        <label>
          <input className="egresar"
            type="radio"
            name="accion"
            value="egresar"
            checked={accion === "egresar"}
            onChange={() => setAccion("egresar")}
          />
          Egresar
        </label>

          <input className="input-actualizacion-stock"
            type="number"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
            placeholder="Ingrese cantidad"
          />
        <button className="boton-actualizar-stock" onClick={handleActualizarStock}>Actualizar Stock</button>
      </div>

      
    </div>
  );
};

export default StockControl;
