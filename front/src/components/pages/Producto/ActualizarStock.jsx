import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/actualizarStock.css";
import handleStartScan from "../../../Hooks/Scan";
import { EgresarStock } from "./Stock/EgresarStock";
import { IngresarStock } from "./Stock/IngresarStock";
import ManejoStock from "./Stock/ManejoStock";

export const ActualizarStock = () => {
  const navigate = useNavigate();
  const [scanResult, setScanResult] = useState(null);
  const [saborSeleccionado, setSaborSeleccionado] = useState(null);
  const [accion, setAccion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const scannerRef = useRef(null);
  const [banderaStock, setBanderaStock] = useState(true);

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
    setBanderaStock(!banderaStock);
  
  };

  return (
    <div className="container-actualizarStock">
      <div className="container-subb">
        <button className="boton-atras" onClick={handleAtras}>Atras</button>
        <button className="boton-escanear" onClick={handleIniciarEscaneo}>Iniciar escaneo</button>

        {saborSeleccionado && (
          <ManejoStock
            saborSeleccionado={saborSeleccionado}
            accion={accion}
            setAccion={setAccion}
            cantidad={cantidad}
            setCantidad={setCantidad}
            handleActualizarStock={handleActualizarStock}
          />
        )}

        {!saborSeleccionado && (
          <div id="reader" style={{ width: "340px", height: "300px", marginTop: "7px" }}></div>
        )}
      </div>
    </div>
  );
};
