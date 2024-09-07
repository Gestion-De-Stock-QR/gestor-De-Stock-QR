import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "../../../styles/nuevoProducto.css";
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../../../servicios/productoService";

export const NuevoProducto = () => {
  const [nombreDelProducto, setNombreDelProducto] = useState("");
  const [stockDelProducto, setStockDelProducto] = useState("");
  const [umbralDelProducto, setUmbralDelProducto] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");
  const [qrSize, setQrSize] = useState(300);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setQrSize(window.innerWidth < 800 ? 200 : 300);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleInputChangeNombre = (event) => {
    setNombreDelProducto(event.target.value);
  };

  const handleInputChangeStock = (event) => {
    const value = event.target.value;
    if (value === "" || /^[1-9]\d*$/.test(value)) {
      setStockDelProducto(value);
    }
  };

  const handleInputChangeUmbral = (event) => {
    const value = event.target.value;
    if (value === "" || /^[0-9]\d*$/.test(value)) {
      setUmbralDelProducto(value);
    }
  };

  const handleCrearProducto = async (producto) => {
    try {
      const response = await crearProducto(producto);
      setQrCodeData(response.id.toString());
    } catch (error) {
      console.error("Error registrando:", error);
    }
  };

  const handleGeneracionQR = () => {
    if (
      nombreDelProducto.trim() === "" ||
      stockDelProducto === "" ||
      umbralDelProducto === ""
    ) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const stockDelProducto = Number(stockDelProducto);
    const umbralDelProducto = Number(umbralDelProducto);

    if (stockDelProducto <= 0 || umbralDelProducto < 0) {
      alert("Stock debe ser mayor a 0 y umbral no puede ser negativo.");
      return;
    }

    const producto = {
      nombre: nombreDelProducto,
      stock: stockDelProducto,
      umbral: umbralDelProducto,
    };

    handleCrearProducto(producto);
  };

  const handleDescargaQR = () => {
    const canvas = document.getElementById("qrCodeCanvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${nombreDelProducto}-qrcode.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleAtras = () => {
    navigate("/");
  };

  return (
    <div className="container-nuevoProducto">
      <div className="registro-producto">
        <button className="boton-inicio" onClick={handleAtras}>Atrás</button>
        <form>
          <div className="form-group">
            <label htmlFor="productName">Nombre del Producto:</label>
            <input
              placeholder="ej: Chocolate"
              type="text"
              id="productName"
              value={nombreDelProducto}
              onChange={handleInputChangeNombre}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productStock">Stock del Producto:</label>
            <input
              type="number"
              id="productStock"
              value={stockDelProducto}
              onChange={handleInputChangeStock}
              placeholder="Ingrese un número positivo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productUmbral">Umbral:</label>
            <input
              className="input-umbral"
              type="number"
              id="productUmbral"
              value={umbralDelProducto}
              onChange={handleInputChangeUmbral}
              placeholder="Ingrese un número positivo o 0"
            />
          </div>
          <button
            className="boton-generar-qr"
            type="button"
            onClick={handleGeneracionQR}
          >
            Generar QR
          </button>
        </form>

        {qrCodeData && (
          <div className="qr-container">
            <QRCodeCanvas
              className="QR"
              id="qrCodeCanvas"
              value={qrCodeData}
              size={qrSize}
              level={"H"}
              includeMargin={true}
            />
            <div className="container-boton-imprimir-qr">
              <button className="boton-qr-imprimir" onClick={handleDescargaQR}>
                Descargar QR para imprimir
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
