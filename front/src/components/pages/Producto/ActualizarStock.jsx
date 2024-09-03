import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/actualizarStock.css";
import handleStartScan from "../../../Hooks/Scan";
import StockControl from "./StockControl";
import { EgresarStock } from "./Stock/EgresarStock";
import { IngresarStock } from "./Stock/IngresarStock";

export const ActualizarStock = () => {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [saborSeleccionado, setSaborSeleccionado] = useState(null);
  const [accion, setAccion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const scannerRef = useRef(null);

  const handleAtras = () => {
    navigate("/");
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear();
        scannerRef.current = null;
      }
    };
  }, []);

  const handleIniciarEscaneo = () => {
    handleStartScan(setScanResult, setSaborSeleccionado, scannerRef);
  };
  

  const handleActualizarStock = () => {
    const cantidadNumero = parseInt(cantidad, 10);

    if (!accion || isNaN(cantidadNumero) || cantidadNumero <= 0) {
      alert("Por favor, selecciona una acción y una cantidad válida.");
      return;
    }

    if (accion === "ingresar") {
      IngresarStock(
        saborSeleccionado.stock,
        cantidadNumero,
        saborSeleccionado.id
        
      );
    } else if (accion === "egresar") {
      EgresarStock(
        saborSeleccionado.stock,
        cantidadNumero,
        saborSeleccionado.id
      );
    }
    handleAtras();
  };

  return (
    <div className="container-actualizarStock">
      <div className="container-subb">
          <button onClick={handleAtras}>Atras</button>
          <button onClick={handleIniciarEscaneo}>Iniciar escaneo</button>

          {saborSeleccionado && (
            <div className="scaner-container"> 
              <h2>Resultado del Escaneo:</h2>
              <h1>Nombre: {saborSeleccionado.nombre}</h1>
              <h1>Stock: {saborSeleccionado.stock}</h1>
              <h1>Umbral: {saborSeleccionado.umbral}</h1>

              <StockControl
                accion={accion}
                setAccion={setAccion}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleActualizarStock={handleActualizarStock}
              />
            </div>
          )}

          <div
            id="reader" 
            style={{ width: "380px", height: "480px", marginTop: "10px" }}
          ></div>
       </div>   
    </div>
  );
};
